import { AfterContentInit, Component, ContentChildren, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProgramComponent } from '../program/program.component';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { map, startWith } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-programs-list-searchable',
  templateUrl: './programs-list-searchable.component.html',
  styleUrls: ['./programs-list-searchable.component.scss']
})
export class ProgramsListSearchableComponent implements AfterContentInit {
    @ContentChildren(ProgramComponent) programs: QueryList<ProgramComponent>;

    separators = [COMMA, ENTER];
    allTags: string[] = [];
    activeTags: string[] = [];
    filteredTags: Observable<string[]>;
    tagControl = new FormControl();
    @ViewChild('tagInput', {static: false}) tagInput: ElementRef<HTMLInputElement>;
    @ViewChild('autocomplete', {static: false}) autocomplete: MatAutocomplete;

    constructor() {
    }

    ngAfterContentInit() {
        // Assemble list of allTags. In theory this could be hardcoded in, but I want to support ease of editing
        // by just adding content to the template HTML. I also could've modeled these as objects objects
        // that are rendered with an *ngFor, but then I lose the ability to have more custom content inside
        // each program pane without having fancy innerHTML code.
        for (const program of this.programs.toArray()) {
            for (const tag of program.tags) {
                if (!this.allTags.includes(tag)) {
                    this.allTags.push(tag);
                }
            }
        }
        this.allTags.sort();

        this.filteredTags = this.tagControl.valueChanges.pipe(
            startWith(null),
            map((tag: string | null) => tag ? this.filter(tag) : this.allTags.slice()));
    }

    addTag(event: MatChipInputEvent): void {
        if (!this.autocomplete.isOpen) {
            const input = event.input;
            const value = event.value;

            if (this.allTags.includes(value) && !this.activeTags.includes(value)) {
                this.activeTags.push(value);
                this.tagControl.setValue(null);
                if (input) {
                    input.value = '';
                }
                this.filterPrograms();
            }
        }
    }

    removeTag(tag: string): void {
        const index = this.activeTags.indexOf(tag);
        if (index >= 0) {
            this.activeTags.splice(index, 1);
        }
        this.filterPrograms();
    }

    selectTag(event: MatAutocompleteSelectedEvent): void {
        if (!this.activeTags.includes(event.option.viewValue)) {
            this.activeTags.push(event.option.viewValue);
            this.tagInput.nativeElement.value = '';
            this.tagControl.setValue(null);
            this.filterPrograms();
        }
    }

    filterPrograms(): void {
        // Filter programs by tag. A program must have all the tags given by the user to be shown.
        for (const program of this.programs.toArray()) {
            if (_.intersection(this.activeTags, program.tags).length !== this.activeTags.length) {
                program.hide();
            } else {
                program.show();
            }
        }
    }

    private filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return _.difference(this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0), this.activeTags);
    }

}

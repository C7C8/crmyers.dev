import { Component, OnInit } from '@angular/core';
import { basePath, SchoolNotesList } from './DocumentList';

@Component({
    selector: 'app-school-notes',
    templateUrl: './school-notes.component.html',
    styleUrls: ['./school-notes.component.scss']
})
export class SchoolNotesComponent implements OnInit {
    basePath = basePath;
    currentDocument = SchoolNotesList[0].documents[0];

    constructor() { }

    ngOnInit(): void {
    }

}

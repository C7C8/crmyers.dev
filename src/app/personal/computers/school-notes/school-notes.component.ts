import { Component, OnInit } from '@angular/core';
import { basePath, SchoolNotesList, PdfNotesNode } from './DocumentList';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
    selector: 'app-school-notes',
    templateUrl: './school-notes.component.html',
    styleUrls: ['./school-notes.component.scss']
})
export class SchoolNotesComponent implements OnInit {
    // Document tree data & controls
    treeControl = new NestedTreeControl<PdfNotesNode>(node => node.documents);
    dataSource = new MatTreeNestedDataSource<PdfNotesNode>();

    // Data on the currently selected document, plus relevant controls
    basePath = basePath;
    currentDocument = SchoolNotesList[0].documents[0];

    constructor() {
        this.dataSource.data = SchoolNotesList;
    }

    ngOnInit(): void {
    }

    hasChild(_: number, node: PdfNotesNode): boolean {
        return !!node.documents && node.documents.length > 0;
    }

    switchDocument(newDocument: PdfNotesNode): void {
        this.currentDocument = newDocument;
    }
}

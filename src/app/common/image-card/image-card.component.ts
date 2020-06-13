import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-image-card',
    templateUrl: './image-card.component.html',
    styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
    @Input() title: string;
    @Input() date: string;
    @Input() img: string;
    @ViewChild('imageDetailDialog') imageDetailDialog: TemplateRef<any>;

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
    }

    showDetails(): void {
        this.dialog.open(this.imageDetailDialog, {
            height: '85%',
            width: '85%'
        });
    }
}

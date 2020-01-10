import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-program',
    templateUrl: './program.component.html',
    styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
    @Input() name: string;
    @Input() tags: Array<string>;
    @Input() year: number;
    @Input() image: string;
    @Input() github: string;
    @Input() link: string;

    constructor() { }

    ngOnInit() {
    }
}

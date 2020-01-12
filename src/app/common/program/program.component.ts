import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-program',
    templateUrl: './program.component.html',
    styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
    @Input() name: string;
    @Input() tags: Array<string>;
    @Input() year: number;
    @Input() github: string;
    @Input() link: string;
    @Input() video: string;
    @Input() image: string;
    @ViewChild('vid', {static: false}) vid;

    constructor() { }

    ngOnInit() {
    }

    pauseVideo(): void {
        if (this.vid) {
            this.vid.nativeElement.pause();
        }
    }
}

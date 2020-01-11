import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
    window: any = window;

    constructor() {}

    ngOnInit() {
    }

    year(): number {
        return (new Date()).getFullYear();
    }
}

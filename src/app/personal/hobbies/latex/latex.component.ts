import { Component, OnInit } from '@angular/core';
import { LatexCarouselImages } from './LatexCarouselImages';

@Component({
  selector: 'app-latex',
  templateUrl: './latex.component.html',
  styleUrls: ['./latex.component.scss']
})
export class LatexComponent implements OnInit {
    images = LatexCarouselImages;
    constructor() {
    }

    ngOnInit(): void {
    }
}

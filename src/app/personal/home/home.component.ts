import { Component, OnInit } from '@angular/core';
import { HomeCarouselImages } from './HomeCarouselImages';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	images = HomeCarouselImages;

	constructor() {
	}

	ngOnInit(): void {
	}
}

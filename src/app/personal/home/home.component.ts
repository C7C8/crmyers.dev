import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CarouselImage } from '../../common/defs';
import { HomeCarouselImages } from './HomeCarouselImages';
import { NguCarouselConfig} from '@ngu/carousel';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
    images: CarouselImage[];
    carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        slide: 2,
        speed: 600,
        animation: 'lazy',
        interval: { initialDelay: 1000, timing: 5000 },
        loop: true,
        point: {
            visible: true
        },
        load: 2,
        touch: false,
        easing: 'ease',
    };

    constructor(private cdr: ChangeDetectorRef) {
        this.images = _.shuffle(HomeCarouselImages);
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }
}

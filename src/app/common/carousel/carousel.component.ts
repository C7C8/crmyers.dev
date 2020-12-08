import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Image } from '../defs';
import { NguCarouselConfig } from '@ngu/carousel';
import * as _ from 'lodash';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
    @Input() images: Image[];
    @Input() shuffle = true;
    @Input() carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        slide: 2,
        speed: 600,
        animation: 'lazy',
        interval: { initialDelay: 10000, timing: 10000 },
        loop: true,
        point: {
            visible: true
        },
        load: 2,
        touch: false,
        easing: 'ease',
    };

    constructor(private cdr: ChangeDetectorRef) {
        if (this.shuffle) {
            this.images = _.shuffle(this.images);
        }
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }
}

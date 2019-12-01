import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { NguCarouselModule } from '@ngu/carousel';


@NgModule({
  declarations: [PersonalComponent, HomeComponent],
    imports: [
        CommonModule,
        PersonalRoutingModule,
        MatMenuModule,
        MatButtonModule,
        MatTooltipModule,
        MatToolbarModule,
        MatCardModule,
        NguCarouselModule,
        MatIconModule
    ]
})
export class PersonalModule { }

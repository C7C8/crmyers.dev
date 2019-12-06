import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { NguCarouselModule } from '@ngu/carousel';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [PersonalComponent, HomeComponent, ContactComponent],
    imports: [
        CommonModule,
        PersonalRoutingModule,
        MatMenuModule,
        MatButtonModule,
        MatTooltipModule,
        MatToolbarModule,
        MatCardModule,
        NguCarouselModule,
        MatIconModule,
        MatDividerModule
    ]
})
export class PersonalModule { }

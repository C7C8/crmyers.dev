import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [PersonalComponent, HomeComponent],
    imports: [
        CommonModule,
        PersonalRoutingModule,
        MatMenuModule,
        MatButtonModule,
        MatTooltipModule,
        MatToolbarModule
    ]
})
export class PersonalModule { }

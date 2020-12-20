import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [ProfessionalComponent, HomeComponent],
  imports: [
    CommonModule,
    ProfessionalRoutingModule
  ]
})
export class ProfessionalModule { }

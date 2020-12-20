import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalComponent } from './professional.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: ProfessionalComponent, children: [
        { path: 'home', component: HomeComponent },
        { path: '', redirectTo: 'home' }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule { }

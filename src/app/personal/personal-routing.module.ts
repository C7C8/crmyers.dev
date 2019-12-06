import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: '', component: PersonalComponent, children: [
        { path: 'home', component: HomeComponent },
        { path: 'contact', component: ContactComponent },
        { path: '', redirectTo: 'home' }
    ]},
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class PersonalRoutingModule { }

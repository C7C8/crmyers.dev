import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalHomeComponent } from './personal/personal-home.component';
import { ProfessionalComponent } from './professional/professional.component';
import { LoaderComponent } from './loader.component';


const routes: Routes = [
    { path: 'personal', component: PersonalHomeComponent },
    { path: 'professional', component: ProfessionalComponent },
    { path: '**', component: LoaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

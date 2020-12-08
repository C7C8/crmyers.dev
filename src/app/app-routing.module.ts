import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from './loader.component';


const routes: Routes = [
    { path: 'personal', loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule)},
    { path: 'professional', loadChildren: () => import('./professional/professional.module').then(m => m.ProfessionalModule)},
    { path: '**', component: LoaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProgramsComponent } from './computers/programs/programs.component';
import { WebdevComponent } from './computers/webdev/webdev.component';
import { RicingComponent } from './computers/ricing/ricing.component';
import { LatexComponent } from './hobbies/latex/latex.component';
import { BlenderComponent } from './hobbies/blender/blender.component';
import { CookingComponent } from './hobbies/cooking/cooking.component';
import { TravelComponent } from './travel/travel.component';
import { InterestingStuffComponent } from './interesting-stuff/interesting-stuff.component';
import { GardeningComponent } from './hobbies/gardening/gardening.component';
import { SchoolNotesComponent } from './computers/school-notes/school-notes.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
	{
		path: '', component: PersonalComponent, children: [
			{ path: 'home', component: HomeComponent },
			{
				path: 'computers', children: [
					{ path: 'programs', component: ProgramsComponent },
					{ path: 'webdev', component: WebdevComponent },
					{ path: 'ricing', component: RicingComponent },
					{ path: 'university-notes', component: SchoolNotesComponent },
				]
			},
			{ path: 'games', component: GamesComponent },
			{
				path: 'hobbies', children: [
					{ path: 'latex', component: LatexComponent },
					{ path: 'blender', component: BlenderComponent },
					{ path: 'cooking', component: CookingComponent },
					{ path: 'gardening', component: GardeningComponent }
				]
			},
			{ path: 'travel', component: TravelComponent },
			{ path: 'interesting-stuff', component: InterestingStuffComponent },
			{ path: 'contact', component: ContactComponent },
			{ path: '', redirectTo: 'home' }
		]
	},
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [ RouterModule ]
})
export class PersonalRoutingModule {
}

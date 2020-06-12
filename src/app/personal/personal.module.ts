import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeComponent } from './home/home.component';
import { NguCarouselModule } from '@ngu/carousel';
import { ContactComponent } from './contact/contact.component';
import { RicingComponent } from './computers/ricing/ricing.component';
import { ProgramsComponent } from './computers/programs/programs.component';
import { WebdevComponent } from './computers/webdev/webdev.component';
import { LatexComponent } from './hobbies/latex/latex.component';
import { BlenderComponent } from './hobbies/blender/blender.component';
import { CookingComponent } from './hobbies/cooking/cooking.component';
import { MinecraftComponent } from './games/minecraft/minecraft.component';
import { FactorioComponent } from './games/factorio/factorio.component';
import { SpaceEngineersComponent } from './games/space-engineers/space-engineers.component';
import { KspComponent } from './games/ksp/ksp.component';
import { TerrariaComponent } from './games/terraria/terraria.component';
import { GamesOtherComponent } from './games/games-other/games-other.component';
import { TravelComponent } from './travel/travel.component';
import { InterestingStuffComponent } from './interesting-stuff/interesting-stuff.component';
import { ProgramComponent } from '../common/program/program.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgramsListSearchableComponent } from '../common/programs-list-searchable/programs-list-searchable.component';
import { GardeningComponent } from './hobbies/gardening/gardening.component';
import { CarouselComponent } from '../common/carousel/carousel.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImageCardComponent } from '../common/image-card/image-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule, FlexModule, GridModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        PersonalComponent,
        HomeComponent,
        ContactComponent,
        RicingComponent,
        ProgramsComponent,
        WebdevComponent,
        LatexComponent,
        BlenderComponent,
        CookingComponent,
        MinecraftComponent,
        FactorioComponent,
        SpaceEngineersComponent,
        KspComponent,
        TerrariaComponent,
        GamesOtherComponent,
        TravelComponent,
        InterestingStuffComponent,
        ProgramComponent,
        ProgramsListSearchableComponent,
        CarouselComponent,
        GardeningComponent,
        ImageCardComponent,
    ],
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
        MatDividerModule,
        MatExpansionModule,
        MatChipsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatDialogModule,
        FlexModule,
        GridModule
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class PersonalModule {
}

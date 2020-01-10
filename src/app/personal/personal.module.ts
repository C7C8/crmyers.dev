import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import {
    MatButtonModule,
    MatCardModule, MatChipsModule,
    MatDividerModule, MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { NguCarouselModule } from '@ngu/carousel';
import { ContactComponent } from './contact/contact.component';
import { DataVizComponent } from './computers/data-viz/data-viz.component';
import { RicingComponent } from './computers/ricing/ricing.component';
import { ProgramsComponent } from './computers/programs/programs.component';
import { WebdevComponent } from './computers/webdev/webdev.component';
import { LatexComponent } from './crafts/latex/latex.component';
import { BlenderComponent } from './crafts/blender/blender.component';
import { CookingComponent } from './crafts/cooking/cooking.component';
import { MinecraftComponent } from './games/minecraft/minecraft.component';
import { FactorioComponent } from './games/factorio/factorio.component';
import { SpaceEngineersComponent } from './games/space-engineers/space-engineers.component';
import { KspComponent } from './games/ksp/ksp.component';
import { TerrariaComponent } from './games/terraria/terraria.component';
import { GamesOtherComponent } from './games/games-other/games-other.component';
import { TravelComponent } from './travel/travel.component';
import { InterestingStuffComponent } from './interesting-stuff/interesting-stuff.component';
import { ProgramComponent } from '../common/program/program.component';


@NgModule({
    declarations: [
        PersonalComponent,
        HomeComponent,
        ContactComponent,
        DataVizComponent,
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
        ProgramComponent
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
        MatChipsModule
    ]
})
export class PersonalModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule, MatCardModule
} from '@angular/material';
import { ProfessionalPersonalPopupComponent } from './professional-personal-popup/professional-personal-popup.component';
import { LoaderComponent } from './loader.component';
import { RootComponent } from './root.component';

@NgModule({
    declarations: [
        LoaderComponent,
        ProfessionalPersonalPopupComponent,
        RootComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatMenuModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatCardModule
    ],
    entryComponents: [ ProfessionalPersonalPopupComponent ],
    providers: [],
    bootstrap: [ RootComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProfessionalPersonalPopupComponent } from './professional-personal-popup/professional-personal-popup.component';
import { LoaderComponent } from './loader.component';
import { RootComponent } from './root.component';
import { CookieService } from 'ngx-cookie-service';
import { NguCarouselModule } from '@ngu/carousel';
import { CarouselComponent } from './common/carousel/carousel.component';

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
        MatCardModule,
        NguCarouselModule,
        MatIconModule,
        MatDividerModule
    ],
    entryComponents: [ ProfessionalPersonalPopupComponent ],
    providers: [ CookieService ],
    bootstrap: [ RootComponent ]
})
export class AppModule { }

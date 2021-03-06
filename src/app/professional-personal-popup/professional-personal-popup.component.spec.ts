import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfessionalPersonalPopupComponent } from './professional-personal-popup.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

describe('ProfessionalPersonalPopupComponent', () => {
    let component: ProfessionalPersonalPopupComponent;
    let fixture: ComponentFixture<ProfessionalPersonalPopupComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ProfessionalPersonalPopupComponent ],
            imports: [ MatCardModule, MatDialogModule ],
            providers: [ { provide: MatDialogRef, useValue: {} } ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfessionalPersonalPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

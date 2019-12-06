import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalComponent } from './professional.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfessionalComponent', () => {
    let component: ProfessionalComponent;
    let fixture: ComponentFixture<ProfessionalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProfessionalComponent ],
            imports: [ RouterTestingModule ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfessionalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

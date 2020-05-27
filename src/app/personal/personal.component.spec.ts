import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalComponent } from './personal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PersonalComponent', () => {
    let component: PersonalComponent;
    let fixture: ComponentFixture<PersonalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PersonalComponent ],
            imports: [ RouterTestingModule, MatMenuModule, MatButtonModule, MatDividerModule, NoopAnimationsModule, MatToolbarModule ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

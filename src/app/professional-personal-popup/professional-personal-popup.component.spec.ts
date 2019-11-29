import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPersonalPopupComponent } from './professional-personal-popup.component';

describe('ProfessionalPersonalPopupComponent', () => {
  let component: ProfessionalPersonalPopupComponent;
  let fixture: ComponentFixture<ProfessionalPersonalPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalPersonalPopupComponent ]
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

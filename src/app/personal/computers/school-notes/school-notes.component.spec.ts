import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SchoolNotesComponent } from './school-notes.component';

describe('SchoolNotesComponent', () => {
  let component: SchoolNotesComponent;
  let fixture: ComponentFixture<SchoolNotesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

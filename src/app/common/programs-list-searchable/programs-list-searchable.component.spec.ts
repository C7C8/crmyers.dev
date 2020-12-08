import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsListSearchableComponent } from './programs-list-searchable.component';

describe('ProgramsListSearchableComponent', () => {
  let component: ProgramsListSearchableComponent;
  let fixture: ComponentFixture<ProgramsListSearchableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsListSearchableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsListSearchableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
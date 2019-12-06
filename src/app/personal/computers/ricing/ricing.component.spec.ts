import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicingComponent } from './ricing.component';

describe('RicingComponent', () => {
  let component: RicingComponent;
  let fixture: ComponentFixture<RicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

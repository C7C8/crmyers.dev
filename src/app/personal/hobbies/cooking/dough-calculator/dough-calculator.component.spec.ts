import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughCalculatorComponent } from './dough-calculator.component';

describe('DoughCalculatorComponent', () => {
  let component: DoughCalculatorComponent;
  let fixture: ComponentFixture<DoughCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

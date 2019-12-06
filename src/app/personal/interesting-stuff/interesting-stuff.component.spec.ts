import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingStuffComponent } from './interesting-stuff.component';

describe('InterestingStuffComponent', () => {
  let component: InterestingStuffComponent;
  let fixture: ComponentFixture<InterestingStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestingStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestingStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

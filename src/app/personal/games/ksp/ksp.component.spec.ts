import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KspComponent } from './ksp.component';

describe('KspComponent', () => {
  let component: KspComponent;
  let fixture: ComponentFixture<KspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

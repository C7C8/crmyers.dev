import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrariaComponent } from './terraria.component';

describe('TerrariaComponent', () => {
  let component: TerrariaComponent;
  let fixture: ComponentFixture<TerrariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

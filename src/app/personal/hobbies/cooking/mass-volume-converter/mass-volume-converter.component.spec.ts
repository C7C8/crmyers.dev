import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassVolumeConverterComponent } from './mass-volume-converter.component';

describe('MassVolumeConverterComponent', () => {
  let component: MassVolumeConverterComponent;
  let fixture: ComponentFixture<MassVolumeConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassVolumeConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassVolumeConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

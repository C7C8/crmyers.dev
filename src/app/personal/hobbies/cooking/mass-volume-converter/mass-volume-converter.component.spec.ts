import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MassVolumeConverterComponent } from './mass-volume-converter.component';

describe('MassVolumeConverterComponent', () => {
  let component: MassVolumeConverterComponent;
  let fixture: ComponentFixture<MassVolumeConverterComponent>;

  beforeEach(waitForAsync(() => {
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

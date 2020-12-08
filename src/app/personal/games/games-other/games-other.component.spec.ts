import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GamesOtherComponent } from './games-other.component';

describe('GamesOtherComponent', () => {
  let component: GamesOtherComponent;
  let fixture: ComponentFixture<GamesOtherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

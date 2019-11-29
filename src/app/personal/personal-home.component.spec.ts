import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonalHomeComponent } from './personal-home.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PersonalHomeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PersonalHomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'crmyers-dev'`, () => {
    const fixture = TestBed.createComponent(PersonalHomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('crmyers-dev');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PersonalHomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('crmyers-dev app is running!');
  });
});

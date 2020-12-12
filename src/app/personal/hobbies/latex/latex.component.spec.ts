import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LatexComponent } from './latex.component';

describe('LatexComponent', () => {
	let component: LatexComponent;
	let fixture: ComponentFixture<LatexComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ LatexComponent ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LatexComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

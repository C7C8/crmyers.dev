import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DoughCalculatorComponent } from './dough-calculator.component';

describe('DoughCalculatorComponent', () => {
	let component: DoughCalculatorComponent;
	let fixture: ComponentFixture<DoughCalculatorComponent>;

	beforeEach(waitForAsync(() => {
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

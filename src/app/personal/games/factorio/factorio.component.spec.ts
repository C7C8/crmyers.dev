import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FactorioComponent } from './factorio.component';

describe('FactorioComponent', () => {
	let component: FactorioComponent;
	let fixture: ComponentFixture<FactorioComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ FactorioComponent ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FactorioComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

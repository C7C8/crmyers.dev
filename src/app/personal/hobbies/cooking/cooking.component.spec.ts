import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CookingComponent } from './cooking.component';

describe('CookingComponent', () => {
	let component: CookingComponent;
	let fixture: ComponentFixture<CookingComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ CookingComponent ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CookingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

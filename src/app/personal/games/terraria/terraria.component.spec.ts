import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TerrariaComponent } from './terraria.component';

describe('TerrariaComponent', () => {
	let component: TerrariaComponent;
	let fixture: ComponentFixture<TerrariaComponent>;

	beforeEach(waitForAsync(() => {
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

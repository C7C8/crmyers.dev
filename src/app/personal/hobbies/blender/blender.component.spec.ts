import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlenderComponent } from './blender.component';

describe('BlenderComponent', () => {
	let component: BlenderComponent;
	let fixture: ComponentFixture<BlenderComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ BlenderComponent ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlenderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

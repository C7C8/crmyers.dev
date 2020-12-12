import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpaceEngineersComponent } from './space-engineers.component';

describe('SpaceEngineersComponent', () => {
	let component: SpaceEngineersComponent;
	let fixture: ComponentFixture<SpaceEngineersComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ SpaceEngineersComponent ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SpaceEngineersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

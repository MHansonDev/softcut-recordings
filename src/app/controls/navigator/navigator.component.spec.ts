import { TestBed, async } from '@angular/core/testing';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { NavLink } from './nav-link.model';
import { NavigatorComponent } from './navigator.component';

const RouterSpy = jasmine.createSpyObj(
	'Router',
	['navigate']
);

describe('NavigatorComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MatTabsModule,
				MatListModule
			],
			declarations: [
				NavigatorComponent,
			],
			providers: [
				{ provide: Router, useValue: RouterSpy }
			]
		}).compileComponents();
	}));

	it('should create the navigator', async(() => {
		const fixture = TestBed.createComponent(NavigatorComponent);
		const navigator = fixture.debugElement.componentInstance;
		expect(navigator).toBeTruthy();
	}));

	it(`should have at least one portal`, async(() => {
		const fixture = TestBed.createComponent(NavigatorComponent);
		const navigator = fixture.debugElement.componentInstance;
		navigator.ngOnInit();
		expect(navigator.navigationLinks.length).toBeGreaterThan(0);
	}));

	it(`click should expand the portal`, async(() => {
		const fixture = TestBed.createComponent(NavigatorComponent);
		const navigator = fixture.debugElement.componentInstance;
		navigator.navigationLinks = [new NavLink('Portal 1', '/portal1', true)];
		navigator.parentLinkClick(navigator.navigationLinks[0]);
		expect(navigator.navigationLinks[0].expanded).toBeTrue();
	}));

});
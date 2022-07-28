import { TestBed, async } from '@angular/core/testing';
import { MediaGroupComponent } from './media-group.component';
import { MediaLink } from './media-link.model';

describe('MediaGroupComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [],
			declarations: [
				MediaGroupComponent
			]
		}).compileComponents();
	}));

	it('Should create the Media Group Component', async(() => {
		const fixture = TestBed.createComponent(MediaGroupComponent);
		const navigator = fixture.debugElement.componentInstance;
		expect(navigator).toBeTruthy();
	}));

	it(`Should have at least one Media Link`, async(() => {
		const fixture = TestBed.createComponent(MediaGroupComponent);
		const mediaGroup: MediaGroupComponent = fixture.debugElement.componentInstance;
		mediaGroup.ngOnInit();

		let mediaLinks: MediaLink[] = [];
        const compassLoopLink = new MediaLink('Norns Compass Loop', 'UbwDL_dOFq4');
        mediaLinks.push(compassLoopLink);
		mediaGroup.mediaLinks = mediaLinks;
		expect(mediaGroup.mediaLinks.length).toBeGreaterThan(0);
	}));

});
import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { MediaGroupComponent } from './media-group.component';
import { MediaLink } from './media-link.model';
import { SanitizeEmbedPipe } from './sanitize-embed.pipe';

describe('MediaGroupComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MaterialModule,
				BrowserAnimationsModule
			],
			declarations: [
				MediaGroupComponent,
				SanitizeEmbedPipe
			]
		}).compileComponents();
	});

	it('Should create the Media Group Component', () => {
		const fixture = TestBed.createComponent(MediaGroupComponent);
		const navigator = fixture.debugElement.componentInstance;
		expect(navigator).toBeTruthy();
	});

	it(`Should have at least one Media Link`, () => {
		const fixture = TestBed.createComponent(MediaGroupComponent);
		const mediaGroup: MediaGroupComponent = fixture.debugElement.componentInstance;
		let mediaLinks: MediaLink[] = [];
        const compassLoopLink = new MediaLink('Norns Compass Loop', 'UbwDL_dOFq4');
        mediaLinks.push(compassLoopLink);
		mediaGroup.mediaLinks = mediaLinks;
		expect(mediaGroup.mediaLinks.length).toBeGreaterThan(0);
	});

	it('Tab Click should scroll window into view of iFrame', () => {
		const fixture = TestBed.createComponent(MediaGroupComponent);
		const mediaGroup: MediaGroupComponent = fixture.debugElement.componentInstance;
        const compassLoopLink = new MediaLink('Norns Compass Loop', 'UbwDL_dOFq4');
		mediaGroup.mediaLinks = [compassLoopLink];
		let mediaGroupDiv = <HTMLDivElement>document.getElementsByClassName('mediaGroup')[0];
		mediaGroup.displayMedia(mediaGroupDiv);
		fixture.detectChanges();
		expect(mediaGroupDiv.scrollTop).toBe(0);
	});

});
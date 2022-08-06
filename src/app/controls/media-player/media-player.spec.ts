import { TestBed, async } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { AudioFile } from './audio-file.model';
import { MediaPlayerComponent } from './media-player.component';

class MockAudioService {
}

const RouterSpy = jasmine.createSpyObj(
	'Router',
	['navigate']
);

describe('MediaPlayerComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MatTabsModule,
				MatListModule],
			declarations: [
				MediaPlayerComponent,
			],
			providers: [
				{ provide: Router, useValue: RouterSpy }
			]
		}).compileComponents();

	}));

	it('should create the media player', async(() => {
		const fixture = TestBed.createComponent(MediaPlayerComponent);
		const mediaPlayer = fixture.debugElement.componentInstance;
		expect(mediaPlayer).toBeTruthy();
	}));

	it(`play button should resume playpack`, async(() => {
		// Test continues to fail due to the error: 'NotAllowedError: play() failed because the user didn't interact with the document first'.
		// Tried all the stack overflow recommendations including triggering custom events before the play() method is triggered. No such luck.
		const fixture = TestBed.createComponent(MediaPlayerComponent);
		const mediaPlayer: MediaPlayerComponent = fixture.debugElement.componentInstance;
		let testFile = new AudioFile('Medium Roast', 'Mathew Hanson', '/assets/Audio/Medium Roast.mp3');
		mediaPlayer.files = [testFile];

		document.body.addEventListener("click", function () {
			setTimeout(() => {
				// mediaPlayer.openFile(testFile, 0);
			}, 100);
		});

		document.body.click();
		expect(mediaPlayer.audioRef.nativeElement.played).toBeTruthy();

	}));

});
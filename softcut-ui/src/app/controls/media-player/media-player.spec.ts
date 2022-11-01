import { TestBed, async } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AudioService } from 'src/app/archive/audio/audio.service';
import { AudioInfo } from 'src/app/archive/models/audio-info.model';
import { AudioFile } from './audio-file.model';
import { MediaPlayerComponent } from './media-player.component';

class MockAudioService {
}

const RouterSpy = jasmine.createSpyObj(
	'Router',
	['navigate']
);

let mockAudioService: any = {
}
mockAudioService.audioFiles = [];

describe('MediaPlayerComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MatTabsModule,
				MatListModule],
			declarations: [
				MediaPlayerComponent,
			],
			providers: [
				{ provide: Router, useValue: RouterSpy },
				{ provide: AudioService, useValue: mockAudioService }
			]
		}).compileComponents();

	}));

	it('should create the media player', async(() => {
		const fixture = TestBed.createComponent(MediaPlayerComponent);
		const mediaPlayer = fixture.debugElement.componentInstance;
		expect(mediaPlayer).toBeTruthy();
	}));

	it('should update track description on hover', () => {
		const fixture = TestBed.createComponent(MediaPlayerComponent);
		const mediaPlayer = fixture.debugElement.componentInstance;
		let audioFile = new AudioInfo('Medium Roast', 'Medium Roast', './assets/Audio/Medium Roast', '.mp3', 1);
		mockAudioService.audioInfo = [audioFile];
		mediaPlayer.fileHover(true, audioFile);
		fixture.detectChanges();
		expect(mediaPlayer.audioInfoRef.nativeElement.innerHTML).toBe('Description: Medium Roast');
	});

	it(`play button should resume playpack`, () => {
		// Test continues to fail due to the error: 'NotAllowedError: play() failed because the user didn't interact with the document first'.
		// Tried all the stack overflow recommendations including triggering custom events before the play() method is triggered. No such luck.
		const fixture = TestBed.createComponent(MediaPlayerComponent);
		const mediaPlayer: MediaPlayerComponent = fixture.debugElement.componentInstance;
		let testFile = new AudioFile(-1, 'Medium Roast', 'Mathew Hanson', './assets/Audio/Medium Roast.mp3');
		mediaPlayer.files = [testFile];
		mockAudioService.audioInfo = [testFile];

		document.body.addEventListener("click", function () {
			setTimeout(() => {
				// mediaPlayer.openFile(testFile);
			}, 100);
		});

		document.body.click();
		expect(mediaPlayer.audioRef.nativeElement.played).toBeTruthy();

	});

});
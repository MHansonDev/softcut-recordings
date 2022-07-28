import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MediaPlayerComponent } from './media-player.component';
import { AudioService } from './media-player.service';

const RouterSpy = jasmine.createSpyObj(
	'Router',
	['navigate']
);

describe('MediaPlayerComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [],
			declarations: [
				MediaPlayerComponent,
			],
			providers: [
				{ provide: Router, useValue: RouterSpy },
				AudioService
			]
		}).compileComponents();
	}));

	it('should create the media player', async(() => {
		const fixture = TestBed.createComponent(MediaPlayerComponent);
		const mediaPlayer = fixture.debugElement.componentInstance;
		expect(mediaPlayer).toBeTruthy();
	}));

	it(`play button should resume playpack`, async(() => {
		const fixture = TestBed.createComponent(MediaPlayerComponent);
		const mediaPlayer: MediaPlayerComponent = fixture.debugElement.componentInstance;
		// Trigger the play button
		mediaPlayer.play();
		expect(mediaPlayer.audioService).toBeTrue();
	}));

});
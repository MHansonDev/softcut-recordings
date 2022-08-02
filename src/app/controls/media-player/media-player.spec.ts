import { TestBed, async } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { MediaPlayerComponent } from './media-player.component';
import { AudioService } from './media-player.service';

class MockAudioService {
	//   signedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	getState() { }
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
				{ provide: Router, useValue: RouterSpy },
				{ provide: AudioService, useValue: MockAudioService },
				AudioService
			]
		}).compileComponents();
	}));

	it('should create the media player', async(() => {
		const fixture = TestBed.createComponent(MediaPlayerComponent);
		const mediaPlayer = fixture.debugElement.componentInstance;
		expect(mediaPlayer).toBeTruthy();
	}));

	// it(`play button should resume playpack`, async(() => {
	// 	const fixture = TestBed.createComponent(MediaPlayerComponent);
	// 	const mediaPlayer: MediaPlayerComponent = fixture.debugElement.componentInstance;
	// 	// Trigger the play button
	// 	mediaPlayer.play();
	// 	expect(mediaPlayer.audioService).toBeTrue();
	// }));

});
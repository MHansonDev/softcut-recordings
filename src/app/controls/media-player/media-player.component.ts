import { Component } from '@angular/core';
import { AudioService } from './media-player.service';
import { StreamState } from './stream-state';

@Component({
    selector: 'media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.scss'],
})

export class MediaPlayerComponent {

    files: Array<any> = [];
    state: StreamState;
    currentFile: any = {};

    constructor(
        public audioService: AudioService
    ) {
        // listen to stream state
        this.audioService.getState().subscribe(state => {
            this.state = state;
        });

        // mock audio files
        const audio1 = { name: 'Audio1', artist: 'Distraction Pool', url: '/assets/Audio/Audio1.mp3', index: 0 }
        this.files.push(audio1);
    }

    play() {
        this.openFile(this.files[0], this.files[0].index);
        this.audioService.play();
    }

    pause() {
        this.audioService.pause();
    }

    stop() {
        this.audioService.stop();
    }

    next() {
        const index = this.currentFile.index + 1;
        const file = this.files[index];
        this.openFile(file, index);
    }

    previous() {
        const index = this.currentFile.index - 1;
        const file = this.files[index];
        this.openFile(file, index);
    }

    onSliderChangeEnd(change: any) {
        this.audioService.seekTo(change.value);
    }

    openFile(file: any, index: number) {
        this.currentFile = { index, file };
        this.audioService.stop();
        this.playStream(file.url);
    }

    playStream(url: string) {
        // this.audioService.playStream(url).subscribe(events => {
        this.audioService.playStream(url).subscribe(() => {
            // listening for fun here
        });
    }

    isFirstPlaying() {
        return this.currentFile.index === 0;
    }

    isLastPlaying() {
        return this.currentFile.index === this.files.length - 1;
    }

}
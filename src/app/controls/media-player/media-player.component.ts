import { Component, Input } from '@angular/core';
import { AudioFile } from './audio-file.model';
import { AudioService } from './media-player.service';
import { StreamState } from './stream-state';

@Component({
    selector: 'media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.scss'],
})

export class MediaPlayerComponent {

    @Input() files: Array<any> = [];
    state: StreamState;
    currentFile: any = {};

    constructor(
        public audioService: AudioService
    ) {
        // listen to stream state
        this.audioService.getState().subscribe(state => {
            this.state = state;
        });
    }

    ngAfterViewInit(): void {
        
    }

    play() {
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

    openFile(file: AudioFile, index: number) {
        this.currentFile = { index, file };
        this.audioService.stop();
        this.playStream(file.path);
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
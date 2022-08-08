import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AudioFile } from './audio-file.model';

@Component({
    selector: 'media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.scss'],
})

export class MediaPlayerComponent {

    @ViewChild('audioRef', { static: true }) audioRef: ElementRef<HTMLAudioElement>;
    @Input() files: Array<any> = [];
    currentFile: any = {};

    constructor(
    ) { }

    ngAfterViewInit(): void {
    }

    openFile(file: AudioFile, i: number) {
        this.audioRef.nativeElement.src = file.path;
        this.audioRef.nativeElement.play();
    }

}
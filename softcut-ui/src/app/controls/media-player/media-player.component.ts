import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AudioService } from 'src/app/archive/audio/audio.service';
import { AudioFile } from './audio-file.model';

@Component({
    selector: 'media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.scss'],
})

export class MediaPlayerComponent {

    @ViewChild('audioRef', { static: true }) audioRef: ElementRef<HTMLAudioElement>;
    @ViewChild('audioInfo', {static: true }) audioInfoRef: ElementRef<HTMLDivElement>;
    @Input() files: Array<any> = [];
    currentFile: any = {};

    constructor(
        private audioService: AudioService
    ) { }

    ngAfterViewInit(): void {
    }

    openFile(file: AudioFile) {
        this.audioRef.nativeElement.src = file.path;
        this.audioRef.nativeElement.play();
    }

    fileMouseEnter(file: AudioFile) {
        let audioInfo = this.audioService.audioInfo.filter(ai => ai.id == file.id)[0];
        this.audioInfoRef.nativeElement.style.display = 'block';
        this.audioInfoRef.nativeElement.innerHTML = '<span>Description: ' + audioInfo.description + '</span>'
    }

    fileMouseLeave() {
        this.audioInfoRef.nativeElement.style.display = 'none';
    }

}
import { Component, ElementRef, Input, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AudioService } from 'src/app/archive/audio/audio.service';
import { AudioFile } from './audio-file.model';

@Component({
    selector: 'media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.scss'],
})

export class MediaPlayerComponent {

    @ViewChild('audioRef', { static: true }) audioRef: ElementRef<HTMLAudioElement>;
    @ViewChild('audioInfo', { static: true }) audioInfoRef: ElementRef<HTMLDivElement>;
    @Input() files: Array<any> = [];
    currentFile: any = {};

    fileDescription: string = '<span></span>'

    constructor(
        private audioService: AudioService,
        private sanitizer: DomSanitizer
    ) {
        this.audioService.audioClearObservable().subscribe(() => {
            if (this.audioRef && this.audioInfoRef) {
                this.audioRef.nativeElement.src = '';
                this.fileDescription = '<span></span>';
            }
        });
    }

    ngAfterViewInit(): void {
    }

    openFile(file: AudioFile) {
        this.audioRef.nativeElement.src = file.path;
        this.audioRef.nativeElement.play();
    }

    fileMouseEnter(file: AudioFile) {
        let audioInfo = this.audioService.audioInfo.filter(ai => ai.id == file.id)[0];
        let unsafeDescription = audioInfo.description;
        this.fileDescription = 'Description: ' + unsafeDescription;
    }

}
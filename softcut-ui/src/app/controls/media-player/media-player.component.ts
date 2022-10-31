import { OnInit } from '@angular/core';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AudioService } from 'src/app/archive/audio/audio.service';
import { AudioFile } from './audio-file.model';

@Component({
    selector: 'media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.scss'],
})

export class MediaPlayerComponent implements OnInit {

    @ViewChild('audioRef', { static: true }) audioRef: ElementRef<HTMLAudioElement>;
    @ViewChild('audioInfo', { static: true }) audioInfoRef: ElementRef<HTMLDivElement>;
    @Input() files: Array<any> = [];
    currentFile: any = {};
    listIndex: number;
    fileDescription: string = '<span></span>'

    constructor(
        private audioService: AudioService,
    ) {
    }

    ngOnInit() {
        this.audioService.audioClearObservable().subscribe(() => {
            if (this.audioRef && this.audioInfoRef) {
                this.audioRef.nativeElement.src = '';
                this.fileDescription = '<span></span>';
            }
        });
    }

    openFile(file: AudioFile) {
        this.audioRef.nativeElement.src = file.path;
        this.audioRef.nativeElement.play();
        let audioInfo = this.audioService.audioInfo.filter(ai => ai.id == file.id)[0];
        this.listIndex = this.files.indexOf(file);
        this.fileDescription = 'Description: ' + audioInfo.description;
    }

    fileHover(hover: boolean, file: AudioFile) {
        let files = this.audioService.audioInfo;
        let audioInfo = (hover) ? files.filter(ai => ai.id == file.id)[0] : files[this.listIndex];
        this.fileDescription = (audioInfo) ? 'Description: ' + audioInfo.description : '';
    }

}
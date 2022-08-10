import { Component } from '@angular/core';
import { AudioFile } from 'src/app/controls/media-player/audio-file.model';

@Component({
    selector: 'chill',
    templateUrl: './chill.component.html'
})


export class ChillComponent {

    audioFiles: AudioFile[] = [];

    constructor() {
        this.setupAudioFiles();
    }

    setupAudioFiles() {
        // Chill Audio files
        this.audioFiles.push(new AudioFile('Isomatic', 'Mathew Hanson', '/assets/Audio/Chill/Isomatic.mp3'));
        this.audioFiles.push(new AudioFile('57 Caps', 'Mathew Hanson', '/assets/Audio/Chill/57 Caps.mp3'));
        this.audioFiles.push(new AudioFile('AntiWeen', 'Mathew Hanson', '/assets/Audio/Chill/AntiWeen.mp3'));
        this.audioFiles.push(new AudioFile('Norns Lounge', 'Mathew Hanson', '/assets/Audio/Chill/Norns Lounge.mp3'));
        this.audioFiles.push(new AudioFile('Birch Street Lofi', 'Mathew Hanson', '/assets/Audio/Chill/Birch Street Lofi.mp3'));
        this.audioFiles.push(new AudioFile('FM And a Maine Made Flute', 'Mathew Hanson', '/assets/Audio/Chill/FM And a Maine Made Flute.mp3'));
    }

}
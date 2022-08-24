import { Component } from '@angular/core';
import { AudioFile } from 'src/app/controls/media-player/audio-file.model';

@Component({
    selector: 'rock',
    templateUrl: './rock.component.html'
})

export class RockComponent {

    audioFiles: AudioFile[] = [];

    constructor() {
        this.setupAudioFiles();
    }

    setupAudioFiles() {
        // Chill Audio files
        this.audioFiles.push(new AudioFile('Vapor', 'Mathew Hanson', '/assets/Audio/Rock/Vapor.mp3'));
        this.audioFiles.push(new AudioFile('Free Range Seltzer', 'Mathew Hanson', '/assets/Audio/Rock/Free Range Seltzer.mp3'));
        this.audioFiles.push(new AudioFile('Sweltering Faults', 'Mathew Hanson', '/assets/Audio/Rock/Sweltering Faults.mp3'));
        this.audioFiles.push(new AudioFile('East Annex', 'Mathew Hanson', '/assets/Audio/Rock/East Annex.mp3'));
        this.audioFiles.push(new AudioFile('Purple Pitch', 'Mathew Hanson', '/assets/Audio/Rock/Purple Pitch.mp3'));
        this.audioFiles.push(new AudioFile('Princeton', 'Mathew Hanson', '/assets/Audio/Rock/Princeton.mp3'));
        this.audioFiles.push(new AudioFile('MOOD', 'Mathew Hanson', '/assets/Audio/Rock/MOOD.mp3'));
    }

}
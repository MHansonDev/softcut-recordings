import { Component } from '@angular/core';
import { AudioFile } from 'src/app/controls/media-player/audio-file.model';

@Component({
    selector: 'metal',
    templateUrl: './metal.component.html'
})


export class MetalComponent {

    audioFiles: AudioFile[] = [];

    constructor() {
        this.setupAudioFiles();
    }

    setupAudioFiles() {
        // Metal Audio files
        this.audioFiles.push(new AudioFile('Medium Roast', 'Mathew Hanson', '/assets/Audio/Metal/Medium Roast.mp3'));
        this.audioFiles.push(new AudioFile('Bluesica', 'Mathew Hanson', '/assets/Audio/Metal/Bluesica.mp3'));
        this.audioFiles.push(new AudioFile('Arduous', 'Mathew Hanson', '/assets/Audio/Metal/Arduous.mp3'));
        this.audioFiles.push(new AudioFile('Starting on a Blue Desert', 'Mathew Hanson', '/assets/Audio/Metal/Starting on a Blue Desert.mp3'));
        this.audioFiles.push(new AudioFile('Confused Smoke Detector', 'Mathew Hanson', '/assets/Audio/Metal/Confused Smoke Detector.mp3'));
        this.audioFiles.push(new AudioFile('We\'re Hirin\'', 'Mathew Hanson', '/assets/Audio/Metal/We\'re Hirin\'.mp3'));
    }

}
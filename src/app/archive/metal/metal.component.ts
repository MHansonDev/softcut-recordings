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
        const mediumRoast = new AudioFile('Medium Roast', 'Mathew Hanson', '/assets/Audio/Medium Roast.mp3');
        this.audioFiles.push(mediumRoast);

        const bluesica = new AudioFile('Bluesica', 'Mathew Hanson', '/assets/Audio/Bluesica.mp3');
        this.audioFiles.push(bluesica);

        const arduous = new AudioFile('Arduous', 'Mathew Hanson', '/assets/Audio/Arduous.mp3');
        this.audioFiles.push(arduous);
    }

}
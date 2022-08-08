import { Component } from '@angular/core';
import { AudioFile } from 'src/app/controls/media-player/audio-file.model';

@Component({
    selector: 'electronic',
    templateUrl: './electronic.component.html'
})


export class ElectronicComponent {

    audioFiles: AudioFile[] = [];

    constructor() {
        this.setupAudioFiles();
    }

    setupAudioFiles() {
        // Metal Audio files
        const neutronShowcase = new AudioFile('Neutron Showcase', 'Mathew Hanson', '/assets/Audio/Electronic/Neutron Showcase.mp3');
        this.audioFiles.push(neutronShowcase);
    }

}
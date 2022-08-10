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
        // Electronic Audio files
        this.audioFiles.push(new AudioFile('Neutron Showcase', 'Mathew Hanson', '/assets/Audio/Electronic/Neutron Showcase.mp3'));
        this.audioFiles.push(new AudioFile('Cthulhu', 'Mathew Hanson', '/assets/Audio/Electronic/Cthulhu.mp3'));
        this.audioFiles.push(new AudioFile('Slammed Corder', 'Mathew Hanson', '/assets/Audio/Electronic/Slammed Corder.mp3'));
        this.audioFiles.push(new AudioFile('SubHarmon', 'Mathew Hanson', '/assets/Audio/Electronic/Subharmon.mp3'));
    }

}
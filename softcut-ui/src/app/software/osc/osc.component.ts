import { Component, OnInit } from '@angular/core';
import { MediaLink } from 'src/app/controls/media-group/media-link.model';

@Component({
    selector: 'osc',
    templateUrl: './osc.component.html',
    styleUrls: ['./osc.component.scss']
})
export class OscComponent implements OnInit {

    mediaLinks: MediaLink[] = [];

    constructor() { }

    ngOnInit(): void {
        this.setupMediaLinks();
    }

    setupMediaLinks() {
        const touchWaveform = new MediaLink('Touch Waveform', 'zgj7ZYlIOVU');
        this.mediaLinks.push(touchWaveform);
        const oscLink = new MediaLink('Awake OSC', 'qC76XZtfZ8I');
        this.mediaLinks.push(oscLink);
    }

}
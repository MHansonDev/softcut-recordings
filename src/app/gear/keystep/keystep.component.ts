import { Component, OnInit } from '@angular/core';
import { MediaLink } from 'src/app/controls/media-group/media-link.model';

@Component({
    selector: 'app-keystep',
    templateUrl: './keystep.component.html',
    styleUrls: ['./keystep.component.scss']
})
export class KeystepComponent implements OnInit {

    mediaLinks: MediaLink[] = [];
    showContent = false;

    constructor() { }

    ngOnInit(): void {
        // Create Media Links
        this.setupMediaLinks();
    }

    setupMediaLinks() {
        const seqCCOutLink = new MediaLink('Sequencer & CC Out', 'Ud4nvZsTM7w');
        this.mediaLinks.push(seqCCOutLink);
    }

}
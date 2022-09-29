import { Component, OnInit } from '@angular/core';
import { MediaLink } from 'src/app/controls/media-group/media-link.model';

@Component({
    selector: 'hellraiser',
    templateUrl: './hellraiser.component.html'
})
export class HellraiserComponent implements OnInit {

    mediaLinks: MediaLink[] = [];
    showContent = false;

    constructor() { }

    ngOnInit(): void {
        this.setupMediaLinks();
    }

    setupMediaLinks() {
        // Solo
        const soloLink = new MediaLink('Solo', 'cs3jEPdVV2k');
        this.mediaLinks.push(soloLink);

        // Real Bad Coffee
        const covfefeLink = new MediaLink('Covfefe', 'At0YzyCM9ds');
        this.mediaLinks.push(covfefeLink);

        // Squashed supercollider
        const quashedLink = new MediaLink('Squashed Supercollider', '_aW48FjwmZ4');
        this.mediaLinks.push(quashedLink);

    }

}
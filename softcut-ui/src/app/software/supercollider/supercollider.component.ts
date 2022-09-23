import { Component, OnInit } from '@angular/core';
import { MediaLink } from 'src/app/controls/media-group/media-link.model';

@Component({
    selector: 'supercollider',
    templateUrl: './supercollider.component.html'
})
export class SupercolliderComponent implements OnInit {

    mediaLinks: MediaLink[] = [];

    constructor() { }

    ngOnInit(): void {
        this.setupMediaLinks();
    }

    setupMediaLinks() {
        const moogVCF = new MediaLink('Moog VCF', 'V_vKJ2YdKVw');
        this.mediaLinks.push(moogVCF);

        const blip = new MediaLink('Blip', 'FcvYmpHl2tw');
        this.mediaLinks.push(blip);
    }

}
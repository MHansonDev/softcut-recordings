import { Component, OnInit } from '@angular/core';
import { MediaLink } from 'src/app/controls/media-group/media-link.model';

@Component({
    selector: 'po-12',
    templateUrl: './po-12.component.html',
})
export class PO12Component implements OnInit {

    mediaLinks: MediaLink[] = [];
    showContent = false;

    constructor() { }

    ngOnInit(): void {
        this.setupMediaLinks();
    }

    setupMediaLinks() {
		// Beat
        const beatLink = new MediaLink('Beat', 'q864aB2o6w0');
        this.mediaLinks.push(beatLink);

		// Jam
        const jamLink = new MediaLink('Jam', 's-PxRr3Km04');
        this.mediaLinks.push(jamLink);
    }

}
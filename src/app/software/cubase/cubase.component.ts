import { Component, OnInit } from '@angular/core';
import { MediaLink } from 'src/app/controls/media-group/media-link.model';

@Component({
    selector: 'app-cubase',
    templateUrl: './cubase.component.html',
    styleUrls: ['./cubase.component.scss']
})
export class CubaseComponent implements OnInit {

    mediaLinks: MediaLink[] = [];

    constructor() { }

    ngOnInit(): void {
        this.setupMediaLinks();
    }

    setupMediaLinks() {
        const oscLink = new MediaLink('Demo 1', 'zswE_3A7xMQ');
        this.mediaLinks.push(oscLink);
    }

}
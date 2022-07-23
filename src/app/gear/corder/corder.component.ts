import { Component, OnInit } from '@angular/core';
import { MediaLink } from 'src/app/controls/media-group/media-link.model';

@Component({
    selector: 'app-corder',
    templateUrl: './corder.component.html',
    styleUrls: ['./corder.component.scss']
})
export class CorderComponent implements OnInit {

    mediaLinks: MediaLink[] = [];

    constructor() { }

    ngOnInit(): void {
        this.setupMediaLinks();
    }

    setupMediaLinks() {
        const tapeLoopLink = new MediaLink('CV Tape Loop', '4Vn6dL9mZ0g');
        this.mediaLinks.push(tapeLoopLink);
    }

}

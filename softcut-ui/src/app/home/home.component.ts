import { Component, OnInit } from '@angular/core';
import { MediaLink } from '../controls/media-group/media-link.model';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    mediaLinks: MediaLink[] = [];
    showContent = false;

    constructor() { }

    ngOnInit(): void {
        this.setupMediaLinks();
    }

    setupMediaLinks() {
        const vaporLink = new MediaLink('Vapor', 'GgKUc2Ba2_Y');
        this.mediaLinks.push(vaporLink);
    }

}
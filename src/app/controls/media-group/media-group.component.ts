import { Component, Input, OnInit } from '@angular/core';
import { MediaLink } from './media-link.model';

@Component({
    selector: 'app-media-group',
    templateUrl: './media-group.component.html',
    styleUrls: ['./media-group.component.scss']
})
export class MediaGroupComponent implements OnInit {

	@Input() mediaLinks: MediaLink[];
    showContent = false;

    constructor() { }

    ngOnInit(): void {
    }

    displayMedia(div: HTMLDivElement) {
        this.showContent = true;
        setTimeout(() => {
            div.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }, 0);
    }

}
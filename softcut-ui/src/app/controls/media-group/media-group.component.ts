import { Component, Input } from '@angular/core';
import { MediaLink } from './media-link.model';

@Component({
    selector: 'media-group',
    templateUrl: './media-group.component.html',
    styleUrls: ['./media-group.component.scss']
})
export class MediaGroupComponent {

	@Input() mediaLinks: MediaLink[];

    constructor() { }

    displayMedia(div: HTMLDivElement) {
        setTimeout(() => {
            div.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }, 0);
    }

}
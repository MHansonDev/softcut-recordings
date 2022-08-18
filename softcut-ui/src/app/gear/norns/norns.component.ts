import { Component, OnInit } from '@angular/core';
import { MediaLink } from 'src/app/controls/media-group/media-link.model';

@Component({
    selector: 'norns',
    templateUrl: './norns.component.html',
    styleUrls: ['./norns.component.scss']
})
export class NornsComponent implements OnInit {

    mediaLinks: MediaLink[] = [];
    showContent = false;

    constructor() { }

    ngOnInit(): void {
        this.setupMediaLinks();
    }

    setupMediaLinks() {
        // Demo
        const demoLink = new MediaLink('Demo', 'NU8Z__g0FPs');
        this.mediaLinks.push(demoLink);
        
        // Guitar
        const guitarLink = new MediaLink('Guitar', 'Xj_0Ee663QI');
        this.mediaLinks.push(guitarLink);

        // Guitar 2
        const guitar2Link = new MediaLink('Guitar 2', 'RAo01ECq6Dw');
        this.mediaLinks.push(guitar2Link);

        // Waveform and Position
        const waveformPosLink = new MediaLink('Waveform & Position', '3jLlEOnR73g');
        this.mediaLinks.push(waveformPosLink);
    }

}
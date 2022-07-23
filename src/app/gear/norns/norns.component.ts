import { Component, OnInit } from '@angular/core';
import { MediaLink } from 'src/app/controls/media-group/media-link.model';

@Component({
    selector: 'app-norns',
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

        // Placeholder till the setup video is complete
        // Stereo I/O
        const stereoIOLink = new MediaLink('Routing & Setup', 'NU8Z__g0FPs');
        this.mediaLinks.push(stereoIOLink);
        
        // Guitar
        const guitarLink = new MediaLink('Guitar', 'Xj_0Ee663QI');
        this.mediaLinks.push(guitarLink);

        // Waveform and Position
        const waveformPosLink = new MediaLink('Waveform & Position', '3jLlEOnR73g');
        this.mediaLinks.push(waveformPosLink);
    }

}
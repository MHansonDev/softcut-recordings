import { Component, OnInit } from '@angular/core';
import { MediaLink } from 'src/app/controls/media-group/media-link.model';

@Component({
    selector: 'norns',
    templateUrl: './norns.component.html'
})
export class NornsComponent implements OnInit {

    mediaLinks: MediaLink[] = [];
    showContent = false;

    constructor() { }

    ngOnInit(): void {
        this.setupMediaLinks();
    }

    setupMediaLinks() {
        // Waveform and Position
        const waveformPosLink = new MediaLink('Waveform & Position', '3jLlEOnR73g');
        this.mediaLinks.push(waveformPosLink);

        // Helicopter Game
        const heliGameLink = new MediaLink('Helicopter Game', 'YRkcwvmwkqI');
        this.mediaLinks.push(heliGameLink);

        // Guitar 1
        const guitar1Link = new MediaLink('Guitar 1', 'NU8Z__g0FPs');
        this.mediaLinks.push(guitar1Link);
        
        // Guitar
        const guitar2Link = new MediaLink('Guitar 2', 'Xj_0Ee663QI');
        this.mediaLinks.push(guitar2Link);

        // Guitar 2
        const guitar3Link = new MediaLink('Guitar 3', 'RAo01ECq6Dw');
        this.mediaLinks.push(guitar3Link);
    }

}
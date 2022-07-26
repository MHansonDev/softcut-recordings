import { Component, OnInit } from '@angular/core';
import { MediaLink } from 'src/app/controls/media-group/media-link.model';

@Component({
    selector: 'neutron',
    templateUrl: './neutron.component.html',
    styleUrls: ['./neutron.component.scss']
})
export class NeutronComponent implements OnInit {

    mediaLinks: MediaLink[] = [];
    showContent = false;

    constructor() { }

    ngOnInit(): void {
        this.setupMediaLinks();
    }

    setupMediaLinks() {
        // Patch Mods
        const patchModsLink = new MediaLink('Patch Mods', '5NzxEIBOeTE');
        this.mediaLinks.push(patchModsLink);

        // Filter Sweeps & Arps
        const filterSweepLink = new MediaLink('Filter Sweep Sequences', 'JrmoQ15wWOU');
        this.mediaLinks.push(filterSweepLink);

    }

}
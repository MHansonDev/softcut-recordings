import { Component, HostListener, OnInit } from '@angular/core';
import System from './system';

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    isMobile = false;

    constructor() { }

    ngOnInit(): void {
        this.isMobile = System.determineMobile();
    }

    scrollToTop(contentDiv: HTMLDivElement) {
        contentDiv.scroll(0, 0);
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.isMobile = System.determineMobile();
    }

}
import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    constructor() { }

    scrollToTop(contentDiv: HTMLDivElement) {
        contentDiv.scroll(0, 0);
    }

}

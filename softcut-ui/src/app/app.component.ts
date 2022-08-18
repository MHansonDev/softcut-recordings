import { Component } from '@angular/core';

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    constructor() { }

    scrollToTop(contentDiv: HTMLDivElement) {
        contentDiv.scroll(0, 0);
    }

}

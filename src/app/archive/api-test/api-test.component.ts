import { Component } from '@angular/core';
import { MediaService } from '../media.service';
import { MediaType } from '../models/media-type.model';

@Component({
	selector: 'api-test',
	templateUrl: './api-test.component.html'
})

export class APIComponent {

	mediaTypes: MediaType[] = [];

	constructor(
        private mediaService: MediaService
	) {
	}

	mediaTypesClick() {
		this.getMediaTypes();
	}

	getMediaTypes() {
		this.mediaService.getMediaTypes().subscribe((types) => {
			this.mediaTypes = types;
		})
	}

}
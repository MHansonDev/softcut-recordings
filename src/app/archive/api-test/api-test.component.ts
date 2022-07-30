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

	createMediaTypeClick() {
		const mediaType: MediaType = new MediaType('test', 'test');
		this.mediaService.createMediaType(mediaType).subscribe((result) => {
			console.log(result);
		});
	}

	getMediaTypes() {
		this.mediaService.getMediaTypes().subscribe((types) => {
			this.mediaTypes = types;
		})
	}

}
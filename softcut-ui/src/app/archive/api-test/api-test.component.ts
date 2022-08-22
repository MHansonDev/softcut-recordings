import { Component } from '@angular/core';
import { MediaService } from '../media.service';
import { MediaType } from '../models/media-type.model';

@Component({
	selector: 'api-test',
	templateUrl: './api-test.component.html',
	styleUrls: ['./api-test.component.scss']
})

export class APIComponent {

	mediaTypes: MediaType[] = [];
	mediaTypeName ='';
	mediaTypeDescription = '';

	constructor(
        private mediaService: MediaService
	) {
		this.getMediaTypes();
		this.mediaService.mediaTypeObservable().subscribe((mediaTypes: MediaType[]) => {
			this.mediaTypes = mediaTypes;
		})

		this.setupDB();
	}

	createMediaTypeClick() {
		const mediaType: MediaType = new MediaType(this.mediaTypeName, this.mediaTypeDescription);
		this.mediaService.createMediaType(mediaType).subscribe((result) => {
			this.getMediaTypes();
		});
	}

	deleteMediaType(mediaType: MediaType) {
		this.mediaService.deleteMediaType(mediaType.id).subscribe(() => {
			this.getMediaTypes();
		});
	}

	getMediaTypes() {
		this.mediaService.getMediaTypes();
	}

	setupDB() {
		this.mediaService.setupDB();
	}

}
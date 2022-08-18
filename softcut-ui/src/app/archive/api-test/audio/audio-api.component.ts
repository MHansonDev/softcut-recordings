import { Component } from '@angular/core';
import { Genre } from '../../models/genere.model';
import { AudioApiService } from './audio-api.service';

@Component({
	selector: 'audio-api',
	templateUrl: './audio-api.component.html'
})

export class AudioApiComponent {

	genres: Genre[] = [];
	genreName ='';
	genreDescription = '';

	constructor(
		private audioApiService: AudioApiService
	) {
		this.getGenres();
		this.audioApiService.genreObservable().subscribe((genres: Genre[]) => {
			this.genres = genres;
		})
	}

	createMediaTypeClick() {
		const genre: Genre = new Genre(this.genreName, this.genreDescription, 'blue', false);
		this.audioApiService.createGenre(genre).subscribe((result) => {
			this.getGenres();
		});
	}

	deleteMediaType(genre: Genre) {
		this.audioApiService.deleteGenre(genre.id).subscribe(() => {
			this.getGenres();
		});
	}

	getGenres() {
		this.audioApiService.getGenres();
	}

}
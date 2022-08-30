import { Component } from '@angular/core';
import { AudioFile } from 'src/app/controls/media-player/audio-file.model';
import { AudioInfo } from '../models/audio-info.model';
import { Genre } from '../models/genere.model';
import { AudioService } from './audio.service';

@Component({
	selector: 'audio-archive',
	templateUrl: './audio.component.html',
	styleUrls: ['./../archive.component.scss']
})

export class AudioComponent {

	genres: Genre[] = [];
	audioInfo: AudioInfo[] = [];
	audioFiles: AudioFile[] = [];

	constructor(
		private audioService: AudioService
	) {
		this.audioService.genreObservable().subscribe((genres: Genre[]) => {
			this.genres = genres;
			if (this.genres && this.genres.length > 0) {
				this.getAudioByGenre(0);
			}
		})

		this.audioService.audioInfoObservable().subscribe((audioInfo: AudioInfo[]) => {
			this.audioInfo = audioInfo;
			this.setupAudioFiles();
		})

		this.audioService.getGenres();
	}

	getAudioByGenre(genreIndex: number) {
		this.audioService.audioClear();
		this.audioService.getAudioByGenre(this.genres[genreIndex].id);
		this.setupAudioFiles();
	}

	setupAudioFiles() {
		this.audioFiles = [];
		for (let audio of this.audioInfo) {
			this.audioFiles.push(new AudioFile(audio.id, audio.file_name, 'Mathew Hanson', '/assets/Audio' + audio.path + '/' + audio.file_name + audio.extension));
		}
	}

}
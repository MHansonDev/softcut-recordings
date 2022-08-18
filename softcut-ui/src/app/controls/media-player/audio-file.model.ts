export class AudioFile {
	title: string;
	artist: string;
	path: string;

	constructor (title: string, artist: string, path: string) {
		this.title = title;
		this.artist = artist;
		this.path = path;
	}

}
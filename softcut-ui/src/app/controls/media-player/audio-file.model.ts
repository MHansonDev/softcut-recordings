export class AudioFile {
	id: number;
	title: string;
	artist: string;
	path: string;

	constructor (id: number, title: string, artist: string, path: string) {
		this.id = id;
		this.title = title;
		this.artist = artist;
		this.path = path;
	}

}
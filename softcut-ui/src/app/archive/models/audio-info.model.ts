export class AudioInfo {
	id: number;
	file_name: string;
	description: string;
	path: string;
	extension: string;
	genre: number
	added_on: Date;

	constructor(file_name: string, description: string, path: string, extension: string, genre: number) {
		this.file_name = file_name;
		this.description = description;
		this.path = path;
		this.extension = extension;
		this.genre = genre;
	}
}
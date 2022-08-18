export class MediaType {
	id: number;
	name: string;
	description: string;
	added_on: Date;

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}
}
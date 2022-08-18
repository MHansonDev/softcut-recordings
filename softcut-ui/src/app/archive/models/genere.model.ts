export class Genre {
	id: number;
	name: string;
	description: string;
	color: string;
	read_only: boolean;
	added_on: Date;

	constructor(name: string, description: string, color: string, read_only: boolean) {
		this.name = name;
		this.description = description;
		this.color = color;
		this.read_only = read_only;
	}
}
export class NavLink {
	name: string;
	path: string;
	parent: boolean;
	expanded: boolean = false;
	children: NavLink[] = [];
	selected: boolean = false;

	constructor (name: string, path: string, parent: boolean) {
		this.name = name;
		this.path = path;
		this.parent = parent;
	}
}
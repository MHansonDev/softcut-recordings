import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MediaType } from "./models/media-type.model";

@Injectable()
export class MediaService {

	constructor(
		private http: HttpClient
	) { }

	getMediaTypes(): Observable<any> {
		return this.http.get<any>('http://localhost:3000/mysql');
	}

}
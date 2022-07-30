import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MediaType } from "./models/media-type.model";

@Injectable()
export class MediaService {

	constructor(
		private http: HttpClient
	) { }

	getMediaTypes(): Observable<MediaType[]> {
		return this.http.get<MediaType[]>('http://localhost:3000/mysql');
	}

	createMediaType(mediaType: MediaType): Observable<any> {
		return this.http.post<any>('http://localhost:3000/createMediaType', mediaType);
	}

}
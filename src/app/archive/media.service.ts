import { HttpClient, HttpHeaders } from "@angular/common/http";
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

	deleteMediaType(id: number): Observable<any> {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			}),
			body: {
				id: id,
			}
		};
		return this.http.delete<any>('http://localhost:3000/deleteMediaType', options);
	}

}
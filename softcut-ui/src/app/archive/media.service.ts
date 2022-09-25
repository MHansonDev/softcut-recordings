import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import System from "../system";
import { MediaType } from "./models/media-type.model";

@Injectable()
export class MediaService {

	private _mediaTypes: MediaType[] = [];

	public get mediaTypes() {
		return this._mediaTypes
	}

	public set mediaTypes(value: MediaType[]) {
		this._mediaTypes = value;
		this.mediaTypeSubject$.next(this._mediaTypes);
	}

	public mediaTypeSubject$ = new BehaviorSubject<MediaType[]>(this._mediaTypes);
	mediaTypeObservable(): Observable<MediaType[]> {
        return this.mediaTypeSubject$.asObservable();
    }

	constructor(
		private http: HttpClient
	) { }

	setupDB() {
		return this.http.get<MediaType[]>(System.apiURL + '/mediaType/setupDB').subscribe((types: MediaType[]) => {
			alert(types);
		});
	}

	getMediaTypes() {
		return this.http.get<MediaType[]>( System.apiURL + '/mediaType/getMediaTypes').subscribe((types: MediaType[]) => {
			this.mediaTypes = types;
		});
	}

	createMediaType(mediaType: MediaType): Observable<any> {
		return this.http.post<any>( System.apiURL + '/mediaType/createMediaType', mediaType);
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
		return this.http.delete<any>(System.apiURL + '/mediaType/deleteMediaType', options);
	}

}
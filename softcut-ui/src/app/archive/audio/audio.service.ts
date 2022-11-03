import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import System from "src/app/system";
import { AudioInfo } from "../models/audio-info.model";
import { Genre } from "../models/genere.model";

@Injectable()
export class AudioService {

	constructor(
		private http: HttpClient
	) { }

	private _genres: Genre[] = [];
	private _audioInfo: AudioInfo[] = [];

	public get genres() {
		return this._genres
	}

	public set genres(value: Genre[]) {
		this._genres = value;
		this.genreSubject$.next(this._genres);
	}

	public get audioInfo() {
		return this._audioInfo
	}

	public set audioInfo(value: AudioInfo[]) {
		this._audioInfo = value;
		this.audioInfoSubject$.next(this._audioInfo);
	}

	public genreSubject$ = new BehaviorSubject<Genre[]>(this._genres);
	genreObservable(): Observable<Genre[]> {
        return this.genreSubject$.asObservable();
    }

	public audioInfoSubject$ = new BehaviorSubject<AudioInfo[]>(this._audioInfo);
	audioInfoObservable(): Observable<AudioInfo[]> {
        return this.audioInfoSubject$.asObservable();
    }

	public audioClearSubject$ = new BehaviorSubject(null);
	audioClearObservable(): Observable<null> {
        return this.audioClearSubject$.asObservable();
    }

	getGenres() {
		return this.http.get<Genre[]>(System.apiURL + '/genre/getGenres').subscribe((genres: Genre[]) => {
			this.genres = genres;
		});
	}

	createGenre(genre: Genre): Observable<any> {
		return this.http.post<any>(System.apiURL + '/genre/createGenre', genre);
	}

	deleteGenre(id: number): Observable<void> {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			}),
			body: {
				id: id,
			}
		};
		return this.http.delete<void>(System.apiURL + '/genre/deleteGenre', options);
	}

	getAudioByGenre(genreId: number) {
		return this.http.get<AudioInfo[]>(System.apiURL + '/audio/getAudioByGenre', {
			params: {genreId: genreId }
		}).subscribe((audioInfo: AudioInfo[]) => {
			this.audioInfo = audioInfo;
		});
	}

	audioClear() {
		this.audioClearSubject$.next(null);
	}

}
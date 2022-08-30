import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AudioInfo } from "../models/audio-info.model";
import { Genre } from "../models/genere.model";

@Injectable()
export class AudioService {

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

	constructor(
		private http: HttpClient
	) { }

	getGenres() {
		return this.http.get<Genre[]>('http://localhost:3001/genre/getGenres').subscribe((genres: Genre[]) => {
			this.genres = genres;
		});
	}

	createGenre(genre: Genre): Observable<any> {
		return this.http.post<any>('http://localhost:3001/genre/createGenre', genre);
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
		return this.http.delete<void>('http://localhost:3001/genre/deleteGenre', options);
	}

	getAudioByGenre(genreId: number) {
		return this.http.get<AudioInfo[]>('http://localhost:3001/audio/getAudioByGenre', {
			params: {genreId: genreId }
		}).subscribe((audioInfo: AudioInfo[]) => {
			this.audioInfo = audioInfo;
		});
	}

	audioClear() {
		this.audioClearSubject$.next(null);
	}

}
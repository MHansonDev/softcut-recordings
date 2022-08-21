import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Genre } from "../../models/genere.model";

@Injectable()
export class AudioApiService {

	private _genres: Genre[] = [];

	public get genres() {
		return this._genres
	}

	public set genres(value: Genre[]) {
		this._genres = value;
		this.genreSubject$.next(this._genres);
	}

	public genreSubject$ = new BehaviorSubject<Genre[]>(this._genres);
	genreObservable(): Observable<Genre[]> {
        return this.genreSubject$.asObservable();
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

}
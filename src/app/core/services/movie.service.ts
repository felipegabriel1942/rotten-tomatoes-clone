import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  findMovies(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>('assets/data/movies.json')
      .pipe(
        map((movies) =>
          movies.map((movie) => Object.assign(new Movie({}), movie))
        )
      );
  }

  findMovieById(id: number): Observable<Movie> {
    return this.httpClient
      .get<Movie[]>('assets/data/movies.json')
      .pipe(
        map((movies) =>
          Object.assign(
            new Movie({}),
            movies.filter((movie) => movie.id === id)[0]
          )
        )
      );
  }
}

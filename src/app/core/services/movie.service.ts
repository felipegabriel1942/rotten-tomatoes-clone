import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  findMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('assets/data/movies.json');
  }
}

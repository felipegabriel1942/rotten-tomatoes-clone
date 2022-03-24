import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  public movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.findMovie();
  }

  findMovie(): void {
    const movieId = +this.route.snapshot.paramMap.get('id');

    if (movieId == null) {
      return;
    }

    this.movieService.findMovieById(movieId).subscribe((res) => {
      this.movie = res;
    });
  }
}

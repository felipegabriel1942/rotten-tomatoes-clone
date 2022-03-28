import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-score',
  templateUrl: './movie-score.component.html',
  styleUrls: ['./movie-score.component.css'],
})
export class MovieScoreComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {}

  defineTomatoImage(): string {
    if (this.movie.isCriticScoreFresh) {
      return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg';
    }

    return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-rotten.f1ef4f02ce3.svg';
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.css'],
})
export class MovieSliderComponent implements OnInit {
  @Input() title: string;
  @Input() movies: Movie[] = [];

  constructor() {}

  ngOnInit(): void {}

  defineTomatoImage(movie: Movie): string {
    if (this.movieIsFresh(movie)) {
      return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg';
    }

    return 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-rotten.f1ef4f02ce3.svg';
  }

  movieIsFresh(movie: Movie): boolean {
    return movie != null && movie.criticScore >= 60;
  }
}

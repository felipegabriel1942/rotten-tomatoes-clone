import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-score-card',
  templateUrl: './movie-score-card.component.html',
  styleUrls: ['./movie-score-card.component.css'],
})
export class MovieScoreCardComponent implements OnInit {
  public freshScoreIconUrl =
    'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh.75211285dbb.svg';

  public freshAudienceScoreIconUrl =
    'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg';

  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {}
}

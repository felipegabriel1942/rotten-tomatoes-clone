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
}

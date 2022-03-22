import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsSliderComponent } from './components/news-slider/news-slider.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { MovieSliderComponent } from './components/movie-slider/movie-slider.component';
import { ComponentHeaderComponent } from './components/component-header/component-header.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieScoreComponent } from './components/movie-score/movie-score.component';

@NgModule({
  declarations: [
    NewsSliderComponent,
    NewsCardComponent,
    MovieSliderComponent,
    ComponentHeaderComponent,
    MovieListComponent,
    MovieScoreComponent,
  ],
  imports: [CommonModule],
  exports: [
    NewsSliderComponent,
    NewsCardComponent,
    MovieSliderComponent,
    MovieListComponent,
  ],
})
export class SharedModule {}

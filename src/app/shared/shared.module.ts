import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsSliderComponent } from './components/news-slider/news-slider.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { MovieSliderComponent } from './components/movie-slider/movie-slider.component';
import { ComponentHeaderComponent } from './components/component-header/component-header.component';

@NgModule({
  declarations: [
    NewsSliderComponent,
    NewsCardComponent,
    MovieSliderComponent,
    ComponentHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [NewsSliderComponent, NewsCardComponent, MovieSliderComponent],
})
export class SharedModule {}

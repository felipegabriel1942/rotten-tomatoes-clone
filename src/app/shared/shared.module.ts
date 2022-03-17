import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsSliderComponent } from './components/news-slider/news-slider.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

@NgModule({
  declarations: [NewsSliderComponent, NewsCardComponent],
  imports: [CommonModule],
  exports: [NewsSliderComponent, NewsCardComponent],
})
export class SharedModule {}

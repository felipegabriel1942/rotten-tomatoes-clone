import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.css'],
})
export class NewsSliderComponent implements OnInit {
  slideIndex = 0;
  interval;

  @Input() newsList = [];

  constructor() {}

  ngOnInit(): void {
    this.startSlide();
  }

  startSlide(): void {
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.nextSlide();
    }, 8000);
  }

  nextSlide(): void {
    this.slideIndex++;

    if (this.slideIndex >= this.newsList.length) {
      this.slideIndex = 0;
    }

    this.startSlide();
  }

  previousSlide(): void {
    this.slideIndex--;

    if (this.slideIndex < 0) {
      this.slideIndex = this.newsList.length - 1;
    }

    this.startSlide();
  }

  changeSlide(index: number): void {
    this.slideIndex = index;
  }
}

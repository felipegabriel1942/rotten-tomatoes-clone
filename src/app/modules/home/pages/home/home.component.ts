import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { NewsService } from 'src/app/core/services/news.service';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sliderNews: any[] = [];
  mainNews1;
  mainNews2;
  movies: Movie[];

  constructor(
    private movieService: MovieService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.findNews();
    this.findMovies();
  }

  findMovies(): void {
    this.movieService.findMovies().subscribe((res) => {
      this.movies = res;
    });
  }

  findNews(): void {
    this.newsService.findNews().subscribe((res) => {
      this.sliderNews = res.filter((_, i) => {
        return i < res.length - 2;
      });

      this.mainNews1 = res.filter((_, i) => {
        return res.length - 2 === i;
      })[0];

      this.mainNews2 = res.filter((_, i) => {
        return res.length - 1 === i;
      })[0];
    });
  }
}

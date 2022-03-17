import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newsList = [
    {
      title: 'Star wars is over?',
      content: 'Hello there star wars is not over!',
      image:
        'https://rollingstone.uol.com.br/media/_versions/poster_classico_de_star_wars__uma_nova_esperanca_-_reproducao__lucasfilm_widelg.jpg',
    },
    {
      title: 'The god father is back?',
      content: 'Leave the gun, take the cannoli!',
      image:
        'https://br.web.img2.acsta.net/r_654_368/newsv7/16/01/19/20/37/565613.jpg',
    },
    {
      title: 'Seven samurai',
      content: 'Some are saying that this movie sucks ass!!',
      image:
        'https://cinemacomrapadura.com.br/imagens/2020/08/20200827-os-sete-samurais-thumbnail.jpg',
    },
    {
      title: 'Captain America',
      content: 'Marvel Rules, DC sucks!',
      image:
        'https://www.infinitynews.com.br/wp-content/uploads/2019/08/thumb-1920-484780.jpg',
    },
  ];

  images = [
    'https://rollingstone.uol.com.br/media/_versions/poster_classico_de_star_wars__uma_nova_esperanca_-_reproducao__lucasfilm_widelg.jpg',
    'https://br.web.img2.acsta.net/r_654_368/newsv7/16/01/19/20/37/565613.jpg',
    'https://cinemacomrapadura.com.br/imagens/2020/08/20200827-os-sete-samurais-thumbnail.jpg',
    'https://www.infinitynews.com.br/wp-content/uploads/2019/08/thumb-1920-484780.jpg',
    'https://culturadoria.com.br/wp-content/uploads/2022/03/the-bataman.jpg',
    'https://uploads.emaisgoias.com.br/2022/01/fa8f8144-homem-aranha.jpg',
    'https://i.ytimg.com/vi/vvSyhWKVCsQ/maxresdefault.jpg',
  ];

  sliderNews = [];
  mainNews1;
  mainNews2;

  constructor() {}

  ngOnInit(): void {
    this.createNews();
  }

  createNews(): void {
    this.sliderNews = this.newsList.filter((_, i) => {
      return i < this.newsList.length - 2;
    });

    this.mainNews1 = this.newsList.filter((_, i) => {
      return this.newsList.length - 2 === i;
    })[0];

    this.mainNews2 = this.newsList.filter((_, i) => {
      return this.newsList.length - 1 === i;
    })[0];
  }
}

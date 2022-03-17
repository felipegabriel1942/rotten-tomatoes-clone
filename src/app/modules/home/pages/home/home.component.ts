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
      title: 'Seven samurai rules?',
      content: 'Some are saying that this movie sucks ass!!',
      image:
        'https://cinemacomrapadura.com.br/imagens/2020/08/20200827-os-sete-samurais-thumbnail.jpg',
    },
    {
      title: 'Captain America is the best movie evah?',
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

  constructor() {}

  ngOnInit(): void {}
}

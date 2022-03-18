import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News } from 'src/app/shared/models/news.model';

@Injectable({ providedIn: 'root' })
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  findNews(): Observable<News[]> {
    return this.httpClient.get<News[]>('assets/data/news.json');
  }
}

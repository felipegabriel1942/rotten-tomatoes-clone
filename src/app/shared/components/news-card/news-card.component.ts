import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { News } from '../../models/news.model';
import { fadeStateTrigger } from './news-card.animation';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
  animations: [fadeStateTrigger],
})
export class NewsCardComponent implements OnInit, OnChanges {
  @Input() news: News;

  changedImage = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.news.previousValue == null) {
      return;
    }

    if (
      changes != null &&
      changes.news.currentValue.image !== changes.news.previousValue.image
    ) {
      this.changedImage = true;
    }
  }

  ngOnInit(): void {}

  onImageAnimated(event: any): void {
    console.log(event);
    // this.changedImage = false;
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScoreCardComponent } from './movie-score-card.component';

describe('MovieScoreCardComponent', () => {
  let component: MovieScoreCardComponent;
  let fixture: ComponentFixture<MovieScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieScoreCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

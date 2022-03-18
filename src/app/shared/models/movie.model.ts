export class Movie {
  title: string;
  criticScore: number;
  posterImageUrl: string;

  constructor({ title = null, criticScore = null, posterImageUrl = null }) {
    this.title = title;
    this.criticScore = criticScore;
    this.posterImageUrl = posterImageUrl;
  }
}

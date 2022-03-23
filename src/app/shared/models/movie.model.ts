export class Movie {
  id: number;
  title: string;
  criticScore: number;
  posterImageUrl: string;

  constructor({
    id = null,
    title = null,
    criticScore = null,
    posterImageUrl = null,
  }) {
    this.id = id;
    this.title = title;
    this.criticScore = criticScore;
    this.posterImageUrl = posterImageUrl;
  }
}

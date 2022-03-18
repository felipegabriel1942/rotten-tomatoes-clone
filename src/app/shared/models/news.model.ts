export class News {
  title: string;
  content: string;
  image: string;

  constructor({ title = null, content = null, image = null }) {
    this.title = title;
    this.content = content;
    this.image = image;
  }
}

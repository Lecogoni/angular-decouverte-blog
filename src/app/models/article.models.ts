export class Article {
  id: number;
  title: string;
  description: string;
  createdDate: Date;
  likes: number;
  imageUrl: string;

  constructor(id: number, title: string, description: string, imageUrl: string, createdDate: Date, likes: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdDate = createdDate;
    this.likes = likes;
  }
}
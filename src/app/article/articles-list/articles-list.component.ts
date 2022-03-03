import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.models';
import { ArticlesDataService } from '../services/articles-data.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  /**
   * declaration of an empty array aimed at receiving all the articles
   */
  articles!: Article[];

  constructor(private ArticlesData: ArticlesDataService) { }

  /**
   * OnInit
   * add all the messages present in the services - injected in the constructor - and store them in the local array articles
   */
  ngOnInit(): void {
    this.articles = this.ArticlesData.getAllArticles();
  }

}

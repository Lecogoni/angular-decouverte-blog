import { Component, Input, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subject, take } from 'rxjs';
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

  myObservable$!: Observable<String>;

  constructor(private service: ArticlesDataService) { }

  /**
   * OnInit
   * add all the messages present in the services
   * injected in the constructor - and store them in the local array articles
   */
  ngOnInit(): void {

    // exo openclassrooms

    // this.myObservable$ = interval(1000).pipe(
    //   take(2),
    //   filter(value => value % 3 === 0),
    //   map(value => value % 2 === 0 ?
    //     `Je suis ${value} et je suis pair` :
    //     `Je suis ${value} et je suis impair`
    //   )
    // );


    this.service.setData().subscribe((res) => this.articles = res);
    this.service.loginTest('nico');
  }


}

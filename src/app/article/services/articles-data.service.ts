import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of } from 'rxjs';
import { Article } from 'src/app/models/article.models';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesDataService {

  // URL to web api
  articlesApiUrl = 'http://localhost:8080/api/articles';


  // Observables set with articles from backend durign oinstanciation / constructor
  private subject = new BehaviorSubject<Article[]>([]);

  /**
   * hard coding of blog article
   */
  articles: Article[] = [
    {
      id: 0,
      title: 'périple en inde',
      description: "Qui iste reiciendis vel aspernatur excepturi id voluptatem tempore quo aliquid consequatur et galisum dolorem est vero mollitia qui accusamus laudantium.",
      createdDate: new Date(),
      likes: 1,
      imageUrl: "https://i.dailymail.co.uk/i/pix/2015/11/19/17/2E9971C500000578-3325659-image-a-48_1447953828909.jpg",
    },
    {
      id: 1,
      title: 'mon ascencion du kilimanjaro',
      description: "Qui iste reiciendis vel aspernatur excepturi id voluptatem tempore quo aliquid consequatur et galisum dolorem est vero mollitia qui accusamus laudantium.",
      createdDate: new Date(),
      likes: 2,
      imageUrl: "https://voyages-sensass.com/wp-content/uploads/2017/06/kilimanjaro-1025146-v2-3-800x459.jpg",
    },
    {
      id: 2,
      title: 'a la découverte de la toscane',
      description: "Qui iste reiciendis vel aspernatur excepturi id voluptatem tempore quo aliquid consequatur et galisum dolorem est vero mollitia qui accusamus laudantium.",
      createdDate: new Date(),
      likes: 0,
      imageUrl: "https://img-4.linternaute.com/JpLLu3mEtkpjO1kyDjDztGUYJAI=/660x366/smart/0caa38153c1647159a5233e3fcf7aef8/ccmcms-linternaute/11940647.jpg",
    }
  ]

  /**
   * Constructor
   * @param http 
   */
  constructor(private http: HttpClient) {

    // fetch articles from node backend
    this.setArticles();

  }

  // Return array of articles set in hard coding in this class
  getObservableMessages(): Observable<Article[]> {
    return of(this.articles);
  }

  /**
   * Connect with http to node backend and update the observation subject
   */
  setArticles() {
    this.http.get<any>('http://localhost:8080/api/articles')
      .pipe()
      .subscribe(
        (res) => {
          this.subject.next(res);
        }
      )
  }

  /**
   * use to return the observable subject, initialise with all articles durung te construc
   * @returns the observable subject
   */
  setData() {
    return this.subject.asObservable()
  }


  loginTest(user: string) {
    this.http.get<any>(`http://localhost:8080/api/signin?user=${user}`)
  }



  // Model of backend request

  // this.http.get<any>('http://localhost:3030/messages')
  //     .pipe()
  //     .subscribe(
  //         (response) => {
  //           this.subject.next(response)
  //         },
  //         (error) => {
  //           console.log(error);
  //         }, 
  //         () => {
  //           console.log("complete");
  //         }
  //     )




  /**
   * find one article in the articles array by its id received as params
   * if not find throw an errow
   * @param articleID 
   * @returns an Article
   */
  getArticleById(articleID: number): Article {
    const article = this.articles.find(item => item.id === articleID)
    if (!article) {
      throw new Error('article not found!');
    } else {
      return article;
    }
  }


}

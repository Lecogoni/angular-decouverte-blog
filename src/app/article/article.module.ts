import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleShowComponent } from './article-show/article-show.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleShowComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ArticlesListComponent
  ]
})
export class ArticleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleShowComponent } from './article-show/article-show.component';



@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleShowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticlesListComponent
  ]
})
export class ArticleModule { }

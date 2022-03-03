import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleModule } from '../article/article.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ArticleModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class LayoutModule { }

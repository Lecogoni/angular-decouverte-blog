import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleModule } from '../article/article.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages/pages.module';



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
    RouterModule,
    PagesModule,
    AuthModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class LayoutModule { }

import { HttpModule } from '@angular/http';
import { PostService } from './_services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HeadingComponent } from './components/home/heading/heading.component';
import { BlogCreateComponent } from './components/posts/blogs/blog-create/blog-create.component';
import { BlogTemplateComponent } from './components/posts/blogs/blog-template/blog-template.component';
import { BlogsNavigationOptionsComponent } from './components/posts/blogs-navigation-options/blogs-navigation-options.component';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeadingComponent,
    BlogCreateComponent,
    BlogTemplateComponent,
    BlogsNavigationOptionsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

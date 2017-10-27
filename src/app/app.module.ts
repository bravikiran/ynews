import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { JobsComponent } from './jobs/jobs.component';
import { FooterComponent } from './footer/footer.component';
import { CommentsComponent } from './comments/comments.component';
import { AskComponent } from './ask/ask.component';

// Services
import { CommentsdataService } from './commentsdata.service';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    WelcomeComponent,
    NavigationBarComponent,
    JobsComponent,
    FooterComponent,
    CommentsComponent,
    AskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ CommentsdataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

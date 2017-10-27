import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { JobsComponent } from './jobs/jobs.component';
import { CommentsComponent } from './comments/comments.component';
import { AskComponent } from './ask/ask.component';

const routes: Routes = [
  {
    path: '',
    component:NewsComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'ask',
    component: AskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

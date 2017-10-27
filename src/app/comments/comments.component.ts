import { Component, OnInit } from '@angular/core';

import { CommentsdataService } from '../commentsdata.service';

@Component({
  //selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private myHttp:CommentsdataService) { }

   private dataUrl = 'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty';  // URL to web api
    testResponse: any;

    ngOnInit() {

    this.myHttp.getDataObservable(this.dataUrl).subscribe(
        data => {
          this.testResponse = data;

          return  this.testResponse;
        }
    );
  }
}

import { Component, OnInit } from '@angular/core';

import { CommentsdataService } from '../commentsdata.service';

@Component({
  //selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {

  constructor(private myHttp:CommentsdataService) { }

   private dataUrl = 'https://hacker-news.firebaseio.com/v0/item/121003.json?print=pretty';  // URL to web api
    testResponse: any;

    ngOnInit() {

    this.myHttp.getDataObservable(this.dataUrl).subscribe(
        data => {
          this.testResponse = data;
          console.log(this.testResponse);
          return  this.testResponse;
        }
    );
  }

}

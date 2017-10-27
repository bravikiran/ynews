import { Component, OnInit } from '@angular/core';

import { CommentsdataService } from '../commentsdata.service';

declare var $:any;

@Component({
  //selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	constructor(private myHttp:CommentsdataService) { }

   	private dataUrl = 'https://hacker-news.firebaseio.com/v0/user/jl.json?print=pretty';  // URL to web api

    userData: any;

    ngOnInit() {

    	this.myHttp.getDataObservable(this.dataUrl).subscribe(
        	data => {
          		this.userData = data;
          		return  this.userData;
        	}
    	);
	}
}

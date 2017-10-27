import { Component, OnInit } from '@angular/core';

import { CommentsdataService } from '../commentsdata.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

 constructor(private myHttp:CommentsdataService) { }

   	private dataUrl = 'https://hacker-news.firebaseio.com/v0/item/192327.json?print=pretty';  // URL to web api

    jobsData: any;

    ngOnInit() {

    	this.myHttp.getDataObservable(this.dataUrl).subscribe(
        	data => {
          		this.jobsData = data;
          		return  this.jobsData;
        	}
    	);
  	}

}
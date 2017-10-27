import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class CommentsdataService {

	constructor(private _http:Http) {}

    getDataObservable(url:string) {
    return this._http.get(url)
        .map(data => {
            data.json();
            return data.json();
    	});
	}
}

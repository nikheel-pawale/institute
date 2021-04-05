import { Injectable } from '@angular/core';
//import { BehaviorSubject, Observable } from 'rxjs';
import {Observable,of,throwError, from}  from 'rxjs';
import { catchError,tap,map} from 'rxjs/operators'
import { HttpHeaders, HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = "https://ravishvaidya.com/institute/webservices/";
  //home_ws.php
	private headers = new HttpHeaders(
        {
            'Content-Type':  'application/x-www-form-urlencoded',
            Accept: '*/*',
        }
	);

  constructor(private http: HttpClient, public storage: Storage) {}

  submitData(data,pageName){
		let body = new HttpParams({fromObject: data});
		let options = { headers: this.headers};
		return this.http.post(this.apiUrl + pageName, body.toString(), options);
	}

  login(data) {
		//return this.submitData(data,'checkLogin_ws.php');
    return this.http.post(this.apiUrl + 'checkLogin_ws.php', JSON.stringify(data));
	}

  home(){
    return this.http.get(this.apiUrl + 'home_ws.php');
  }

}

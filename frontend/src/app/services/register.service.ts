import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './GLOBAL';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  public url;
  public user;

  constructor(private http: HttpClient) {
    // Backend url to global url
    this.url = global.url;
    // Instance new user model
    this.user = new User('', '', '', 0, '', '', '', true);
  }

  registerUser(user: any): Observable<any>{
    // Header request
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    // Consume api service
    if(user !== ''){
      return this.http.post(this.url+'user'+'/registerUser', {headers})
    } else{
      return this.http.post(this.url+'user'+'/registerUser', {headers})
    }
  }
}

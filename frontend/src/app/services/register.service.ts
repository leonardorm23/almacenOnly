import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './GLOBAL';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  public url;
  public data:any;

  constructor(private http: HttpClient) {
    // Backend url to global url
    this.url = global.url;
  }

  registerUser(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url + 'user/registerUser',data,{headers:headers});
  }
}

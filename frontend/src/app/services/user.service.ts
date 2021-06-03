import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url;
  public data:any;

  constructor(private http: HttpClient) { 
    this.url = global.url;
  }

  registerUser(data:any):Observable<any>{
  let headers = new HttpHeaders().set('Content-Type','application/json');
  return this.http.post(this.url + 'user/registerUser',data,{headers:headers});
  }

  getUser(filtro:any):Observable<any>{

      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      if(filtro !== ''){
        return this.http.post(this.url  +'user/' + filtro, {headers: headers});
      }else{
        return this.http.get(this.url  +'user/' + filtro, {headers: headers});
      }
    }

  getUserID(id: any): Observable<any> {
      // Headers del request
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.get(this.url + "user/" + id, {
        headers: headers,
      });
    }

    editUser(data:any):Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this.http.put(this.url + 'user/editUser/'+data._id,data,{headers:headers});
    }


}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Posts } from '../classes/posts';
import { Students } from '../classes/students';


@Injectable()
export class apiService 
{
    constructor(private httpclient: HttpClient){}
 getComments(): Observable<any>{
     return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
 }
 getCommentsByParameter(): Observable<any>{
     let params1 = new HttpParams().set('userId','1');
     return this.httpclient.get("https://jsonplaceholder.typicode.com/posts", {params: params1});
    
    }
  post(opost:Posts): Observable<any> {
      return this.httpclient.post("https://jsonplaceholder.typicode.com/posts",opost);
  }  
  getStudents(): Observable<any>{
      return this.httpclient.get("");
  }
  getStudentsByParameter(): Observable<any>{
      let params = new HttpParams().set('controlNumber','14400904');
      return this.httpclient.get("",{params: params});
  }
}
import { Injectable } from '@angular/core';
import {IPost} from '../interfaces/ipost';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostblogService {

  urlApi: string = 'https://jsonplaceholder.typicode.com';

  constructor( private http: HttpClient) { 


  }

  getAllPosts(): Observable<IPost[]>{

    return this.http.get<IPost[]>(this.urlApi + '/posts');

  }

  deletePost(id: number): Observable<IPost[]> {
    
    return this.http.delete<IPost[]>(this.urlApi + '/posts/' + id);
  }

}

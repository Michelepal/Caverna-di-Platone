import { Injectable } from '@angular/core';
import {IPost} from '../interfaces/ipost';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Posts } from '../classes/posts';

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

  createPost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(this.urlApi + '/posts', post);
  }

}

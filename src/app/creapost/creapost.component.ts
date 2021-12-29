import { Component, OnInit } from '@angular/core';
import { Posts } from '../classes/posts';
import { PostblogService } from '../services/postblog.service';


@Component({
  selector: 'app-creapost',
  templateUrl: './creapost.component.html',
  styleUrls: ['./creapost.component.css']
})
export class CreapostComponent implements OnInit {

  nuovopost: Posts = {
    userId: 1,
    id: 1,
    title: '', 
    body: ''
  }

  constructor(private service: PostblogService) { }

  ngOnInit(): void {
  }

creaPost(nuovopost: Posts): void {

 this.service.createPost(nuovopost).subscribe(res => console.log(res));
}

}

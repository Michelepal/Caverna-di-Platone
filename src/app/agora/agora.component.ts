import { Component, OnInit } from '@angular/core';
import { PostblogService } from '../services/postblog.service';
import {IPost} from '../interfaces/ipost';
import {Comment} from '../interfaces/comment';
import {Posts} from '../classes/posts';
import { Router } from '@angular/router';



@Component({
  selector: 'app-agora',
  templateUrl: './agora.component.html',
  styleUrls: ['./agora.component.css']
})
export class AgoraComponent implements OnInit {

  listapost: Posts[] = [];
  postdacancellare: Posts[] = [];


  constructor(private service: PostblogService, private router: Router) { }

  ngOnInit(): void {

    this.service.getAllPosts().subscribe(res => this.listapost = res);
  }

  cancellaPost(id: number): void {

    this.service.deletePost(id).subscribe(res => {

      this.postdacancellare = res;
      this.router.navigateByUrl('/agora', { skipLocationChange: true }).then(() => {
        this.router.navigate(['agora']);
    });
  });
  }

  apriCreaPost(): void {

    this.router.navigateByUrl('/creapost');
  }



}

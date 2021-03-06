import { Component, OnInit } from '@angular/core';
import { PostblogService } from '../services/postblog.service';
import {IPost} from '../interfaces/ipost';
import {IComment} from '../interfaces/comment';
import {Posts} from '../classes/posts';
import {Comment} from '../classes/comment';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-agora',
  templateUrl: './agora.component.html',
  styleUrls: ['./agora.component.css']
})
export class AgoraComponent implements OnInit {

  listapost: Posts[] = [];
  postdacancellare: Posts[] = [];
  listacommenti: Comment[] = [];
  nuovocommento: any = [];
  commenta = false;
  idcommento!: number;

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

  leggiCommenti(id: number): void {

    this.service.getCommentById(id).subscribe(res => this.listacommenti = res);
  }

  aggiungiCommento() {
    this.commenta = true;
    return 
    
  }

  rispondi() {
    this.service.newComment(this.nuovocommento).subscribe(res => this.nuovocommento=res);

  }

}

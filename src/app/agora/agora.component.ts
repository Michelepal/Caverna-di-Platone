import { Component, OnInit } from '@angular/core';
import { PostblogService } from '../services/postblog.service';
import {IPost} from '../interfaces/ipost';
import {Posts} from '../classes/posts';

@Component({
  selector: 'app-agora',
  templateUrl: './agora.component.html',
  styleUrls: ['./agora.component.css']
})
export class AgoraComponent implements OnInit {

  listapost: Posts[] = [];

  constructor(private service: PostblogService) { }

  ngOnInit(): void {

    this.service.getAllPosts().subscribe(res => this.listapost = res);
  }

}

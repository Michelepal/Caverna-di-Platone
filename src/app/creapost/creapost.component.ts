import { Component, OnInit } from '@angular/core';
import { Posts } from '../classes/posts';
import { PostblogService } from '../services/postblog.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-creapost',
  templateUrl: './creapost.component.html',
  styleUrls: ['./creapost.component.css']
})
export class CreapostComponent implements OnInit {

  nuovopost: any = [];
  
  constructor(private service: PostblogService, private router: Router) { }

  ngOnInit(): void {
  }

creaPost(nuovopost: Posts): void {

 this.service.createPost(nuovopost).subscribe(res => {
   this.nuovopost = res;
   this.router.navigateByUrl('/agora');

 });
}

}

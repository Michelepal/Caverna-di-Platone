import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vita-platone',
  templateUrl: './vita-platone.component.html',
  styleUrls: ['./vita-platone.component.css']
})
export class VitaPlatoneComponent implements OnInit {
 
  vita: number = 0;

  constructor() { 
  }

  ngOnInit(): void {
 


  }

scelta(x: number): void {
 
  if (x == 1) {
     this.vita = 1;  
  } else if (x == 2) {
    this.vita = 2;
  } else if (x == 3) {
    this.vita = 3;
  } else if (x == 4) {
    this.vita = 4;
  } else if (x == 5) {
    this.vita = 5;
  } else if (x ==6) {
    this.vita = 6;
  } else if (x == 7) {
    this.vita = 7;
  }

}

}

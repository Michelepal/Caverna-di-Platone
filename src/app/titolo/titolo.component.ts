import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titolo',
  templateUrl: './titolo.component.html',
  styleUrls: ['./titolo.component.css']
})
export class TitoloComponent implements OnInit {

  logo = 'assets/img/plato.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}

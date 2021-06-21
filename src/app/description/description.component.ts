import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private router:Router, private cards:CardsComponent) { }

  


  ngOnInit(): void {
  }

}

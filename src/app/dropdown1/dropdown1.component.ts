import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dropdown1',
  templateUrl: './dropdown1.component.html',
  styleUrls: ['./dropdown1.component.css']
})
export class Dropdown1Component implements OnInit {

  websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']
  

  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  changeWebsite(e:any) {
    console.log(e.target.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

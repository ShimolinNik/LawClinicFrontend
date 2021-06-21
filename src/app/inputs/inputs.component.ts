import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  themes = ["Procédure d'asile", "Représentation légale", "Aide financière et matérielle",
            "Hébergement", "Santé", "Famille", "Formation", "Vie courante et voyage",
            "Protection en cas de violences", "Droits face à la police", "Questions spécifiques au Tribunal"];
  
  input1:String ="";
  input2:String ="";
  
  information:any;
  id = 0;
  getValue(value :any) {
    this.id=value;
    console.log(value);
  }

  test() {
    this.httpClient.get("http://localhost:3000/", { responseType: 'text' }).subscribe(res => {console.log(res);})
  }

  getThemeMot() {
    /*this.httpClient.get("http://localhost:3000/all", { responseType: 'text' }).
    subscribe(res => {this.users=JSON.parse(res);})*/

    this.httpClient.get("http://localhost:3000/"+this.input1+"/"+this.input2).subscribe(res => {this.information=res;})
  }

  getTheme(theme:String) {

    this.httpClient.get("http://localhost:3000//"+theme).subscribe(res => {this.information=res;})
  }

  getMot() {

    this.httpClient.get("http://localhost:3000/"+this.input2).subscribe(res => {this.information=res;})
  }

  getDonnees() {

    this.httpClient.get("http://localhost:3000/sc/"+this.id.toString()).subscribe(res => {console.log(res);})
  }


  ngOnInit(): void {

  }

}

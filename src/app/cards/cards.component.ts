import { Component, OnInit } from '@angular/core';
import { DroplistComponent } from '../droplist/droplist.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  constructor(private httpClient: HttpClient, private router:Router) {
    this.info = this.router.getCurrentNavigation()?.extras.state?.info;
  }

  info;

  /*lasttheme:String="";
  lastmot:String="";

  information:any;

  id = 0;
  getValue(value :any) {
    this.id=value;
    console.log(value);
  }

  getDonnees() {

    this.httpClient.get("http://localhost:3000/sc/"+this.id.toString()).subscribe(res => {this.information=res;})
  }
 

  getCartes() {
    // Recherche par tous les thèmes et par tous les mots
    console.log(this.theme);
    console.log(this.mot);
    
    if(this.theme == "Tous les thèmes" && this.mot == "Tous les mots"){
      this.httpClient.get("http://localhost:3000/all").subscribe(res => {this.information=res;})
      this.lasttheme=this.theme;
      this.lastmot=this.mot;
    }
    // Recherche par thème
    else if (this.theme != this.lasttheme && (this.mot=="" || this.mot=="Tous les mots")) {
      this.httpClient.get("http://localhost:3000//"+this.theme).subscribe(res => {this.information=res;})
      this.lasttheme=this.theme;
      this.lastmot=this.mot;
    }
    else if(this.mot == "Tous les mots" && this.theme == this.lasttheme){
      this.httpClient.get("http://localhost:3000//"+this.theme).subscribe(res => {this.information=res;})
      this.lastmot=this.mot;
    }
    // Recherche par mot
    else if (this.mot != this.lastmot && (this.theme == "" || this.theme == "Tous les thèmes")) {
      this.httpClient.get("http://localhost:3000/"+this.mot).subscribe(res => {this.information=res;})
      this.lasttheme=this.theme;
      this.lastmot=this.mot;
    }
    else if (this.theme == "Tous les thèmes" && this.mot == this.lastmot){
      this.httpClient.get("http://localhost:3000/"+this.mot).subscribe(res => {this.information=res;})
      this.lasttheme=this.theme;
    }
    //Recherche par mot et par thème
    else if ((this.theme != this.lasttheme && this.theme != "Tous les thèmes" &&  this.mot != "" ) || (this.mot != this.lastmot && this.mot!="Tous les mots" && this.theme !="" )){
      this.httpClient.get("http://localhost:3000/"+this.theme+"/"+this.mot).subscribe(res => {this.information=res;})
      this.lasttheme=this.theme;
      this.lastmot=this.mot;
    }
    this.router.navigate(['./cards',this.id], {state:{info: this.information }})
  };*/

  ngOnInit(): void {
    //this.httpClient.get("http://localhost:3000/all").subscribe(res => {this.information=res;})
  }

}

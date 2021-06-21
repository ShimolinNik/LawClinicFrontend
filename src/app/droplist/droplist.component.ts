import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.css']
})
export class DroplistComponent implements OnInit {


  themes = ["Tous les thèmes","Procédure d'asile", "Représentation légale", "Aides financières et matérielles",
            "Hébergement", "Santé", "Famille", "Formation", "Vie courante et voyage",
            "Protection en cas de violences", "Droits face à la police", "Questions spécifiques au Tribunal"];


  mots = ["Tous les mots","admission provisoire","aide d’urgence","aide sociale","AJ","aménagements","appréhension",
          "apprentissage","assistance judiciaire gratuite","assistance juridique","assistant-e social-e","besoins éducatifs particuliers",
          "besoins éducatifs particuliers","centre de la Confédération","classes d’accueil","conseiller-ère-s juridiques",
          "curateur-rice","débouté-e","débouté-e de l'asile","décision d'exécution du renvoi","décision de non-entrée en matière (NEM)",
          "décision de renvoi","décision de renvoi avec délai de départ","décision d’exécution du renvoi","décision NEM","décision NEM Dublin",
          "défense d’office","défense obligatoire","dénonciation","détenu-e","droit d’être entendu-e","École de culture générale (ECG)","école ordinaire",
          "école spécialisée","effet suspensif","enseignement secondaire II","espace Dublin","État Dublin","Haute école spécialisée (HES)",
          "IGS","intérêt supérieur de l’enfant","majeur-e"," 	mesures de pédagogie spécialisée","mineur-e","Ministère public","moyen de preuve","OCPM","PC",
          "peine pécuniaire","permis B","permis B réfugié-e","permis C","permis F","permis F admission provisoire","permis F réfugié-e","permis L",
          "permis N","personne de confiance","personne lésée","plainte pénale","planning familial","prévenu-e","prime d’assurance-maladie","primes",
          "principe de proportionnalité","procédure accélérée","procédure de poursuite","procédure Dublin","procédure étendue","procédure pénale","procès-verbal (PV)",
          "recours","réfugié-e","regroupement familial","régularisation","représentant-e juridique","représentant-e légal-e","sans statut légal",
          "secondaire I","sexe légal","subside","témoin","Tribunal des mineur-e-s","tuteur-rice","université","victime","vie familiale","vie familiale existante"];
  

  constructor(private httpClient: HttpClient,private router:Router) { }

  selectedTheme:String = "Tous les thèmes";
  selectedMot:String = "Tous les mots";


  onSelect(){
    this.getCartes();
    this.router.navigate(['./cards'], {state:{info:this.information }})
  }
  lasttheme:String="";
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
    console.log(this.selectedTheme);
    console.log(this.selectedMot);
    
    // Recherche par tous les thèmes et par tous les mots
    if(this.selectedTheme == "Tous les thèmes" && this.selectedMot == "Tous les mots"){
      this.httpClient.get("http://localhost:3000/all").subscribe(res => {this.information=res;})
      this.lasttheme=this.selectedTheme;
      this.lastmot=this.selectedMot;
    }
    // Recherche par thème
    else if (this.selectedTheme != this.lasttheme && (this.selectedMot=="" || this.selectedMot=="Tous les mots")) {
      this.httpClient.get("http://localhost:3000//"+this.selectedTheme).subscribe(res => {this.information=res;console.log(this.information)})
      this.lasttheme=this.selectedTheme;
      this.lastmot=this.selectedMot;
    }
    else if(this.selectedMot == "Tous les mots" && this.selectedTheme == this.lasttheme){
      this.httpClient.get("http://localhost:3000//"+this.selectedTheme).subscribe(res => {this.information=res;})
      this.lastmot=this.selectedMot;
    }
    // Recherche par mot
    else if (this.selectedMot != this.lastmot && (this.selectedTheme == "" || this.selectedTheme == "Tous les thèmes")) {
      this.httpClient.get("http://localhost:3000/"+this.selectedMot).subscribe(res => {this.information=res;})
      this.lasttheme=this.selectedTheme;
      this.lastmot=this.selectedMot;
    }
    else if (this.selectedTheme == "Tous les thèmes" && this.selectedMot == this.lastmot){
      this.httpClient.get("http://localhost:3000/"+this.selectedMot).subscribe(res => {this.information=res;})
      this.lasttheme=this.selectedTheme;
    }
    //Recherche par mot et par thème
    else if ((this.selectedTheme != this.lasttheme && this.selectedTheme != "Tous les thèmes" &&  this.selectedMot != "" ) || (this.selectedMot != this.lastmot && this.selectedMot!="Tous les mots" && this.selectedTheme !="" )){
      this.httpClient.get("http://localhost:3000/"+this.selectedTheme+"/"+this.selectedMot).subscribe(res => {this.information=res;})
      this.lasttheme=this.selectedTheme;
      this.lastmot=this.selectedMot;
    }
    else {
      console.log(5)

    }
    console.log(this.information)
  };

  ngOnInit(): void {
    //this.httpClient.get("http://localhost:3000/all").subscribe(res => {this.information=res;})

  }
}

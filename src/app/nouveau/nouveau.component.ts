import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class NouveauComponent implements OnInit {


  x = "ouf";

  constructor(private httpClient: HttpClient) { }

  test() {
    this.httpClient.get("http://localhost:3000/", { responseType: 'text' }).
    subscribe(res => {console.log(res);})
    }
    
  ngOnInit(): void {
  }

}

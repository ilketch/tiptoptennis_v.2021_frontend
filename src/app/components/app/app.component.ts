import { Component, OnInit } from '@angular/core';
import { LascuolaComponent } from '../lascuola/lascuola.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'TipTopTennis';

  navbarVisible: boolean = true;

  constructor(){ }

  ngOnInit(): void {
    
  }

}

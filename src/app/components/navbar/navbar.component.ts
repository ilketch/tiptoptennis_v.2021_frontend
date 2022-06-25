import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { LascuolaComponent } from '../lascuola/lascuola.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  // navbarVisible = false;

  constructor(private router: Router, private lascuolaComponent: LascuolaComponent) {
    
  }

  ngOnInit(): void {
    
  }

  navbarVisibleClick(){
    // this.navbarVisible = !this.navbarVisible;
  }

  setPage(page: string) {
    document.getElementById('btn').click();
    this.router.navigate([page]);
  }
  
  goTo(id: string) {
    if(id !== ''){
      document.getElementById('btn-1').click();
    }
    this.setPage('lascuola');
    this.lascuolaComponent.goTo(id);
  }

}

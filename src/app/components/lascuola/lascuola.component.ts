import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AppComponent } from '../app/app.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-lascuola',
  templateUrl: './lascuola.component.html',
  styleUrls: ['./lascuola.component.scss']
})
export class LascuolaComponent implements OnInit {

  constructor(private appcomponent: AppComponent) { }

  ngOnInit(): void {
    
  }

  goTo(id: string) {
    if(id == '') {
      return;
    }
    let btn = document.getElementById(id);
    if(btn != null) {
      btn.click();
    }
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  minorenni() {
    let aMin = document.getElementById('minorenni');
    aMin.click();
  }

  maggiorenni() {
    let aMag = document.getElementById('maggiorenni');
    aMag.click();
  }

  brochure() {
    let aMag = document.getElementById('brochure');
    aMag.click();
  }

}

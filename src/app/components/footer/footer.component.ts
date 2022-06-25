import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notizia } from 'src/app/models/notizia.model';
import { NotiziaService } from 'src/app/services/notizia.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ultimeNotizie: Array<Notizia> = [];
  ultimaNotizia: Notizia = {id: null, titolo: null, contenuto: null, espandi: null, isDeleted: null, isVisible: null, data: null};
  penultimaNotizia: Notizia = {id: null, titolo: null, contenuto: null, espandi: null, isDeleted: null, isVisible: null, data: null};

  constructor(private notiziaService: NotiziaService, private router: Router) { }

  ngOnInit(): void {
    this.notiziaService.GetAll().subscribe(data => {
      this.ultimeNotizie = data;
      this.ultimeNotizie = this.ultimeNotizie.filter(x => x.isDeleted === false && x.isVisible === true);
      this.ultimaNotizia = this.ultimeNotizie[0];
      this.penultimaNotizia = this.ultimeNotizie[1];

      document.getElementById('ultimaNotizia').innerHTML = this.ultimaNotizia.contenuto;
      document.getElementById('penultimaNotizia').innerHTML = this.penultimaNotizia.contenuto;
    });
  }

  goToNews(): void {
    this.router.navigate(['news']);
  }
}

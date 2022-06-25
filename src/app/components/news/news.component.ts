import { Component, OnInit } from '@angular/core';
import { Notizia } from 'src/app/models/notizia.model';
import { NotiziaService } from 'src/app/services/notizia.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  visibleNews: Array<Notizia> = [];
  
  constructor(private notiziaService: NotiziaService) { }

  ngOnInit(): void {
    this.notiziaService.GetAll().subscribe(data => {
      this.visibleNews = data;
      this.visibleNews = this.visibleNews.filter(x => x.isDeleted === false && x.isVisible === true);
    });
  }

}

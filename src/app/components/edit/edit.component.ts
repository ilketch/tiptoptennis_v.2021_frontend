import { HttpClient  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Notizia } from 'src/app/models/notizia.model';
import { AuthService } from 'src/app/services/auth.service';
import { NotiziaService } from 'src/app/services/notizia.service';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  title = 'provaTypescript';
  testo: string = '';
  url: string = '';

  filterTitolo: string;
  filterScelta: string = "tutti";

  notizia: Notizia;
  Id: number;
  Titolo: string;
  Data: Date;
  Contenuto: string;
  ContenutoHTML: any;
  IsDeleted: boolean;
  IsVisible: boolean;

  news: Array<Notizia> = [];
  filteredNews: Array<Notizia> = [];

  afuConfig = {
    uploadAPI: {
      url:"https://localhost:44338/api/Files"
    }
  };

  constructor(private notiziaService: NotiziaService, private authService: AuthService, private appComponent: AppComponent, private router: Router,) {
    
  }
 

  ngOnInit(): void {
    document.getElementById('textarea').setAttribute('contenteditable', 'true');
    document.getElementById('textareaEdit').setAttribute('contenteditable', 'true');
    this.aggiorna();
    this.appComponent.navbarVisible = false;
  }

  aggiorna() {
    this.notiziaService.GetAll().subscribe(data => {
      this.news = data;
      this.filter();
    });
  }

  filter() {
    if(this.filterTitolo != undefined) {
      this.filteredNews = this.news.filter(x => x.titolo.toLocaleLowerCase().indexOf(this.filterTitolo.toLowerCase()) >= 0);
    }
    else {
      this.filteredNews = this.news;
    }
    if(this.filterScelta=="visibili"){
      this.filteredNews = this.filteredNews.filter(x => x.isVisible === true).filter(x => x.isDeleted === false);
    }
    else if(this.filterScelta=="nonvisibili"){
      this.filteredNews = this.filteredNews.filter(x => x.isVisible === false).filter(x => x.isDeleted === false);
    }
    else if(this.filterScelta=="eliminati"){
      this.filteredNews = this.filteredNews.filter(x => x.isDeleted === true);
    }
    else{
      this.filteredNews = this.filteredNews.filter(x => x.isDeleted === false);
    }
  }


  // ----- filter -----

  filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }


  // ----- modals -----

  SvuotaForm(form: NgForm): void {
    form.resetForm();
    document.getElementById('textarea').innerHTML = '';
  }

  // ----- modal add -----

  format(command: string, value?: string | undefined): any {    // format(string command, string value) - aggiunge i tag di formattazione del testo nella text area
    document.execCommand(command, false, value);
  }

  setUrl(): any {                                               // seturl() - aggiunge tag di collegamneto ipertestuale nella text area
    var sText = document.getSelection();
    document.execCommand('insertHTML', false, '<a href="' + this.url + '" target="_blank">' + sText + '</a>');
  }

  save(): any {                                                 
    this.testo = document.getElementById('textarea').innerHTML;      // testo = codice html salvato nella stringa (da passare al be)
  }

  AddNews(form: NgForm): void {
    this.notizia = {
      titolo: form.value.titolo,
      data: form.value.data,
      contenuto: document.getElementById('textarea').innerHTML,
      isDeleted: false,
      isVisible: false,
      id: 0,
      espandi: false
    };
    this.notiziaService.Add(this.notizia).subscribe(p => {
      this.aggiorna();
    }, err => {
      if(err.status==401)
      {
        alert('Autenticazione scaduta, rifai il Login!')
        this.router.navigate(['login'])
      }
    });
    this.SvuotaForm(form);
    let button = document.getElementById('closeModalAdd');
    button.click();
  }

  // ----- modal edit -----

  GetNews(id: number): void {
    this.notiziaService.GetSingle(id).subscribe(data => {
      this.Titolo =data.titolo;
      this.Data = data.data;
      this.Contenuto = data.contenuto;
      document.getElementById('textareaEdit').innerHTML = this.Contenuto;
      this.ContenutoHTML = document.getElementById('textareaEdit').innerHTML;
      this.IsVisible = data.isVisible;
      this.IsDeleted = data.isDeleted;
      this.Id = data.id;
    }, err => {
      if(err.status==401)
      {
        alert('Autenticazione scaduta, rifai il Login!')
        this.router.navigate(['login'])
      }
    });
  }

  EditNews(form: NgForm): void {
    this.notizia = {
      titolo: form.value.titolo,
      data: form.value.data,
      contenuto: document.getElementById('textareaEdit').innerHTML,
      isDeleted: this.IsDeleted,
      isVisible: this.IsVisible,
      id: this.Id,
      espandi: false,
    };
    this.notiziaService.Update(this.notizia).subscribe(p => {
      this.aggiorna();
    }, err => {
      if(err.status==401)
      {
        alert('Autenticazione scaduta, rifai il Login!')
        this.router.navigate(['login'])
      }
    });
    let button = document.getElementById('closeModalEdit');
    button.click();
  }

  // ----- tools buttons -----

  Delete(id: number) {
    var domanda = confirm('Eliminare questo elemento definitivamente?');
    if (domanda === true) {
      this.notiziaService.Delete(id).subscribe(p => {
        this.aggiorna();
      }, err => {
        if(err.status==401)
        {
          alert('Autenticazione scaduta, rifai il Login!')
          this.router.navigate(['login'])
        }
      });
    }
  }

  PutIntoRecycleBin(id: number) {
    var domanda = confirm('Spostare questo elemento nel cestino?');
    if (domanda === true) {
      this.notiziaService.PutIntoRecycleBin(id).subscribe(p => {
        this.aggiorna();
      }, err => {
        if(err.status==401)
        {
          alert('Autenticazione scaduta, rifai il Login!')
          this.router.navigate(['login'])
        }
      });
    }
  }

  RemoveFromRecycleBin(id: number) {
    this.notiziaService.RemoveFromRecycleBin(id).subscribe(p => {
      this.aggiorna();
    }, err => {
      if(err.status==401)
      {
        alert('Autenticazione scaduta, rifai il Login!')
        this.router.navigate(['login'])
      }
    });
  }

  SetInvisible(id: number) {
    this.notiziaService.SetInvisible(id).subscribe(p => {
      this.aggiorna();
    }, err => {
      if(err.status==401)
      {
        alert('Autenticazione scaduta, rifai il Login!')
        this.router.navigate(['login'])
      }
    });
  }

  SetVisible(id: number) {
    this.notiziaService.SetVisible(id).subscribe(p => {
      this.aggiorna();
    }, err => {
      if(err.status==401)
      {
        alert('Autenticazione scaduta, rifai il Login!')
        this.router.navigate(['login'])
      }
    });
  }

  logOut(): void {
    var domanda = confirm('Vuoi uscire?');
    if (domanda === true) {
      this.authService.logOut();
    }
  }
  // uploadFile(): any {
  //   var fileToUpload = document.getElementsByName("inputFile");
    // console.log('filetoUpload: ', fileToUpload);
    // var stringa = JSON.stringify(fileToUpload);
    // console.log('stringa: ', stringa);
    // var fileToRead = JSON.parse(stringa);
    // console.log('FileToRead: ', fileToRead);

    // this.http.post('https://localhost:44338/api/Files', fileToUpload).subscribe(res => console.log(res));
  // }

  

  // selectedFile: File = null;
  // onFileSelected(event){
  //   this.selectedFile = <File>event.target.files[0];
  // }

  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post('https://localhost:44338/api/Files', this.selectedFile).subscribe(res => console.log(res));
  // }

  // formdata:any;

  // onClickSubmit(data: any) {
  //   if(this.formdata.invalid){
  //     this.formdata.get('description').markAsTouched();
  //   }
  // }

  
}

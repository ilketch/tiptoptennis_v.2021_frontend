import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Notizia } from '../models/notizia.model';

@Injectable({
  providedIn: 'root'
})
export class NotiziaService {
  
  PATH: string = "https://tiptoptennisbackend.azurewebsites.net/";

  constructor(private http: HttpClient) {}

  GetAll(): Observable<any> {
    return this.http.get(this.PATH + 'api/Notizia/GetAll');
  }
  
  GetSingle(id: number): Observable<any> {
    return this.http.get(this.PATH + 'api/Notizia/GetSingle/' + id);
  }

  Add(notizia: Notizia) {
    const data = JSON.stringify(notizia);
    return this.http.post(this.PATH + 'api/Notizia/Add', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  Update(notizia: Notizia) {
    const data = JSON.stringify(notizia);
    return this.http.put(this.PATH + 'api/Notizia/Update', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  SetVisible(id: number) {
    return this.http.put(this.PATH + 'api/Notizia/SetVisible/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  SetInvisible(id: number) {
    return this.http.put(this.PATH + 'api/Notizia/SetInvisible/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  PutIntoRecycleBin(id: number) {
    return this.http.put(this.PATH + 'api/Notizia/PutIntoRecycleBin/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  RemoveFromRecycleBin(id: number) {
    return this.http.put(this.PATH + 'api/Notizia/RemoveFromRecycleBin/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  Delete(id: number){
    return this.http.delete(this.PATH + 'api/Notizia/Delete/' + id);
  }
}

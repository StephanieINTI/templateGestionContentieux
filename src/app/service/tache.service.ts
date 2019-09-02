import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private httpClient: HttpClient) { }

  public getAllTache(): Observable<any>{
    return this.httpClient.get('http://localhost:9090/gestionContentieux/tache').map(response  => response);
   }

   public saveTache(tache:any):Observable<any>{
    return this.httpClient.post('http://localhost:9090/gestionContentieux/tache',tache);
   }
}

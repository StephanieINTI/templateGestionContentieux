import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {

  constructor(private httpClient: HttpClient) { }
  public getAllAffaire(): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionContentieux/affaire').map(response => response);
  }
  public getAffaireByTitre(titre: string): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionContentieux/affaire/' + titre);
  }
  public saveAffaire(affaire: any): Observable<any> {
    return this.httpClient.post('http://localhost:9090/gestionContentieux/affaire', affaire);
  }
  public deleteAffaire(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:9090/gestionContentieux/affaire/' + id);
  }
  public updateAffaire(affaire: any): Observable<any> {
    var affaireParse = JSON.parse(affaire);
    return this.httpClient.put('http://localhost:9090/gestionContentieux/affaire/' + affaireParse.idAffaire, affaireParse);
  }

}

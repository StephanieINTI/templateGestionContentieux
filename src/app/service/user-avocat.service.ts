import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserAvocatService {

  constructor(private httpClient: HttpClient) { }
  public getAllUser(): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionContentieux/user-admin').map(response => response);
  }
}

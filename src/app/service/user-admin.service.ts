import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {

  constructor(private httpClient: HttpClient) { }
  public getAllUser(): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionContentieux/user-admin').map(response => response);
  }
  public getUser(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionContentieux/user-admin/' + id);
  }
  public saveUser(user: any): Observable<any> {
    return this.httpClient.post('http://localhost:9090/gestionContentieux/user-admin', user);
  }
  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:9090/gestionContentieux/user-admin/' + id);
  }
  public updateUser(user: any): Observable<any> {
    var userParse = JSON.parse(user);
    return this.httpClient.put('http://localhost:9090/gestionContentieux/user-admin/' + userParse.idUtilisateur, userParse);
  }
}

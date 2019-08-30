import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TribunalService {

  constructor(private httpClient: HttpClient) { }

  public getAllTribunal(): Observable<any>{
    return this.httpClient.get('http://localhost:9090/tribunal').map(response  => response);
   }
  
}

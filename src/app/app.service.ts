import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;

  constructor(private httpClient: HttpClient) { }
  authenticate(credentials, callback){
    const headers = new HttpHeaders(credentials ? {
     
        authorization : 'Basic '+ btoa(credentials.username + ':' + credentials.password)
    } :{}
    
    );
    this.httpClient.get('http://localhost:9090/gestionContentieux/login/user',{headers : headers}).subscribe(
      response => {
        if (response['username']){
          this.authenticated =true;
          //Si dans l'entête j'ai l'username j'accède à la page qui suit, je suis authentifié
        }else{
          this.authenticated=false;
          //Sinon , il faut retaper le login et le password, car je ne suis pas authentifier
        }
        return callback && callback();
      }
    );
 
  }
}

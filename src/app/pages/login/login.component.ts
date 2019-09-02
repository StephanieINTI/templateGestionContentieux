import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {username: '', password: ''};

  constructor(private appService: AppService, private httpClient: HttpClient,
    private router: Router) { }
//Router ; pour faire appel à une page par défaut (on choisit la page des utilisateurs) lorsaque l'utilisateur se connecte
  ngOnInit() {
  }
login(){
  this.appService.authenticate(this.credentials,()=> {
    this.router.navigateByUrl('/dashboard'); 
    //Lorsque les utilisateurs se connecte, il est dirigé vers la page du dashbord.
    //Dans le projet, rediriger vers la partie des graphiques.
  });
  return false;
  //callback permet d'afficher la page qui suit
}
}

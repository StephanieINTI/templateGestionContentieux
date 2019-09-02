import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/app.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  sidebarVisible: boolean;
  constructor(private httpClient:HttpClient,private appService:AppService,location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
    this.sidebarVisible = false;
    this.appService.authenticate(undefined,undefined); //on vide les credentials(username & password)
  }

  logout(){
    this.httpClient.post('http://localhost:9090/gestionContentieux/logout',{}).finally(()=>
    {this.appService.authenticated=false;
    this.router.navigateByUrl('login');}).subscribe();
}
  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gestion Contentieux';

  

   // Object to save the response returned from the service.
   myresponse: any;
 
   // Url to fetch the employee records from the spring application.
   readonly APP_URL = 'http://localhost:9090/gestionContentieux';
  
   constructor(private _http: HttpClient) { }
  
   // Method to fetch all employees from the database table.
   getAllTribunal() {
     this._http.get(this.APP_URL + '/tribunal').subscribe(
       data => {
         this.myresponse = data;
       },
       error => {
         console.log('Error occured', error);
       }
     );
   }
}

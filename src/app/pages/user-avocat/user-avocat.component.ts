import { Component, OnInit } from '@angular/core';
import { UserAvocatService } from 'src/app/service/user-avocat.service';

@Component({
  selector: 'app-user-avocat',
  templateUrl: './user-avocat.component.html',
  styleUrls: ['./user-avocat.component.scss']
})
export class UserAvocatComponent implements OnInit {
users: any[];

  constructor(private userAvocatService: UserAvocatService) { }

  ngOnInit() {
    this.loadUser();

  }
  loadUser() {
    this.userAvocatService.getAllUser().subscribe(
      data => {this.users = data;},
      error => {console.log(error);}
    )
  }
  

}

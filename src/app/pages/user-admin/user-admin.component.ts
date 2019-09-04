import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserAdminService } from 'src/app/service/user-admin.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
users: any[];
user: User = new User();
  constructor(private userAdminService: UserAdminService) { }

  ngOnInit() {
    this.loadUser();
    this.loadOneUser();
  }
  loadUser() {
    this.userAdminService.getAllUser().subscribe(
      data => {this.users = data;},
      error => {console.log(error);}
    )
  }
  createUser() {
    this.userAdminService.saveUser(this.user).subscribe(
      () => {this.loadUser(); this.user = new User(); }
    )
  }
  loadOneUser() {
    this.userAdminService.getUser(this.user.idUtilisateur).subscribe(
      data => {this.user.idUtilisateur = data;},
      error => {console.log(error);}
    )
  }
  updateUser(form) {
    this.userAdminService.updateUser(this.user.idUtilisateur).subscribe(
      data => {this.user.idUtilisateur = data;},
      error => {console.log(error);}
    )
  }

  selectUser(user: User){
    this.user = user;
  }
  

}

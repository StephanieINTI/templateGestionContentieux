import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
users: any[];
user: Utilisateur = new Utilisateur();
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.utilisateurService.getAllUser().subscribe(
      data => {this.users = data;},
      error => {console.log(error);}
    )
  }

  createUser() {
    this.utilisateurService.saveUser(this.user).subscribe(
      () => {this.loadUser(); this.user = new Utilisateur(); }
    )
  }
  loadOneUser() {
    this.utilisateurService.getOneUser(this.user).subscribe(
      data => {this.user = data;},
      error => {console.log(error);}
    )
  }

  updateUser() {
    this.utilisateurService.updateUser(this.user).subscribe(
      
    )
  }
}

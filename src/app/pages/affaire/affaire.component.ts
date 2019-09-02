import { Component, OnInit } from '@angular/core';
import { AffaireService } from '../../service/affaire.service';
import { Affaire } from '../../model/affaire';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.scss']
})
export class AffaireComponent implements OnInit {
  affaires: any[];
  affaire: Affaire = new Affaire();
  // filterAffaire;
  constructor(private affaireService: AffaireService) { }

  ngOnInit() {
    this.loadAffaire();
  }
  
  loadAffaire() {
    this.affaireService.getAllAffaire().subscribe(
      data => {this.affaires = data;},
      error => {console.log(error);}
    )
  }
  createAffaire() {
    this.affaireService.saveAffaire(this.affaire).subscribe(
      () => {this.loadAffaire(); this.affaire = new Affaire(); }
    )
  }
  loadOneAffaire() {
    this.affaireService.getAffaireByTitre(this.affaire.titre).subscribe(
      data => {this.loadAffaire(); this.affaire.titre = data;},
      error => {console.log(error);}
    )
  }

  // search(titre: string) {
  //   if(!titre) {
  //     this.filterAffaire = this.affaire;
  //   } else {
  //     this.filterAffaire = this.affaire.titre(x => 
  //        x.titre.trim().toLowerCase().includes(titre.trim().toLowerCase())
  //     );
  //   }
  }


import { Component, OnInit } from '@angular/core';
import { TribunalService } from '../../service/tribunal.service';
import { Tribunal } from 'src/app/model/tribunal';


@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  styleUrls: ['./tribunal.component.scss']
})
export class TribunalComponent implements OnInit {
 tribunaux: any[];
  constructor(private tribunalService: TribunalService) { }

  ngOnInit() {
    this.loadTribunal();
  }
  loadTribunal() {
    this.tribunalService.getAllTribunal().subscribe(
      data => {this.tribunaux = data;},
      error => {console.log(error);}
    )
  }

}

import {Component, OnInit, Input} from '@angular/core';
import { DataSource } from '../../companie/single/paiement/paiement.model';

@Component({
  selector: 'app-paiement-card',
  templateUrl: './paiementCard.component.html',
  styleUrls: ['./paiementCard.component.css']
})
export class PaiementCardComponent implements OnInit {

  @Input() newCard: DataSource = new DataSource()
  years = [2017, 2018, 2019, 2020, 2020, 2021]
  months = ['01','02','03','04','05','06','07','08','09','10','11','12']
  constructor(

  ) {
  }


  ngOnInit() {}


}

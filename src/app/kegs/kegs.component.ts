// See what happends when you delete OnInit and ngOnInit

import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';
import { $ } from 'protractor';

@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.css']
})
export class KegsComponent implements OnInit {

  ngOnInit() {
  }

  kegs: Keg[] = [
    new Keg('Black Butte', 'Deschutes', 'Porter', 6, 5.2),
    new Keg('Gimme Mo', 'Crux', 'IPA', 6, 6.2),
    new Keg('Sacrilege Sour Cherry',
      'Reverend Nat\'s', 'Cider', 12, 6.0),
    new Keg('Ice', 'Milwaukee\'s Best', 'Lager', 2, 3)
  ]

  selectedKeg: null;

  toggleDetails(keg) {
    if (this.selectedKeg === null) {
      this.selectedKeg = keg
    } else {
      this.selectedKeg = null
    }
  }
}

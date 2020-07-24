import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pia-about-us',
  templateUrl: './pia-about-us.page.html',
  styleUrls: ['./pia-about-us.page.scss'],
})
export class PiaAboutUsPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  go() {
    this.navCtrl.back();
    }

  }


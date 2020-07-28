import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pia-careers',
  templateUrl: './pia-careers.page.html',
  styleUrls: ['./pia-careers.page.scss'],
})
export class PiaCareersPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  go() {

    this.navCtrl.back();
    
  }

}

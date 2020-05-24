import { Component, OnInit, NgZone } from '@angular/core';
import { PiaItemsService } from './pia-items.service';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pia-items',
  templateUrl: './pia-items.page.html',
  styleUrls: ['./pia-items.page.scss'],
  
  providers: [PiaItemsService]
})

export class PiaItemsPage implements OnInit {
  @ViewChild('slides', {static: false}) slides: IonSlides;

zz

  Items: any = [];

  rand: any;

  constructor(   
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    private itemAPI: PiaItemsService
    ) {}

  ngOnInit(){
    this.itemAPI.getItemList().subscribe((res) => {
    this.getItem(res); 
  })
  }

  getItem(res){
    var rand = res[Math.floor(Math.random() * res.length)];
    this.addItem(this.Items, rand)
    this.slides.slideNext();
    }

    addItem(itemArr, random) {
      const { length } = itemArr;
      const found = itemArr.some(el => el.body === random.body);
      if (!found) itemArr.push(random);
      console.log(itemArr);
      return itemArr;
    }

}


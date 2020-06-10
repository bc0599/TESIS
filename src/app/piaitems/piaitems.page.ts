import { Component, OnInit, NgZone } from '@angular/core';
import { PiaItemsService } from './piaitems.service';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import {cloneDeep} from 'lodash';
import {User} from '../../../Shared/user'

@Component({
  selector: 'app-piaitems',
  templateUrl: './piaitems.page.html',
  styleUrls: ['./piaitems.page.scss'],
  
  providers: [PiaItemsService]
})

export class PiaItemsPage implements OnInit {
  userForm: FormGroup;

  @ViewChild('slides', {static: false}) slides: IonSlides;

  Items: any = [];
  response: any = [];
  rand: any;
  user: User

  constructor(   
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    private itemAPI: PiaItemsService,
    public route: ActivatedRoute
    ) {}

  ngOnInit(){
    this.itemAPI.getItemList().subscribe((res) => {
      this.response= cloneDeep(res);
      this.Items= this.response.sort(this.func);
      console.log(this.Items);
  })
  }

  func(a, b) {  
    return 0.5 - Math.random();
  } 


  slide(){ 
    this.slides.slideNext();
  }

  button1clicked(){
    var answer="Totalmente de acuerdo";
    this.buttonClicked(answer);
  }
  button2clicked(){
    var answer="De acuerdo";
    this.buttonClicked(answer);
  }
  button3clicked(){
  var answer=" En desacuerdo";
  this.buttonClicked(answer);
  }
  
  button4clicked(){
  var answer="Totalmente en desacuerdo";
  this.buttonClicked(answer);
}
  buttonClicked(answer){
    this.user = {
      userr: "betsabe",
      user_items:{
      item_id:this.Items[0]._id,
      answer:answer
      }
    }
    this.onFormSubmit(this.user);    
  }

  onFormSubmit(user) {
      this.itemAPI.addUser(user)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(this.user)   
          })
        });
    }
  }

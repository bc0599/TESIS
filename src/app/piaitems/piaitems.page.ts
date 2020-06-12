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

    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
      e.returnValue = confirmationMessage;  
      return confirmationMessage;              
  });

    this.itemAPI.getItemList().subscribe((res) => {
      this.response= cloneDeep(res);
      this.Items= this.response.sort(this.func);
      console.log(this.Items);
      var u= Math.floor(Math.random() * (999 + 1)) + 1;
      var us= u.toString();
      this.user = {
        userr: us,
        user_items:{
        item_id:"",
        answer:""
        }
      }
      this.onFormSubmit(this.user);

  })
  }

  func(a, b) {  
    return 0.5 - Math.random();
  } 

  slide(){ 
    this.slides.slideNext();
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

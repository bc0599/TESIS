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
  u:any= Math.random().toString(36).substr(2, 9);
  us:any= this.u.toString();
  i:number=0;
  ans:any;
  progress:any=0;
  

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

  document.getElementById("resultButton").style.display = "none";
  document.getElementById('finishSlide').style.display = "none";

    this.itemAPI.getItemList().subscribe((res) => {
      this.response= cloneDeep(res);
      this.Items= this.response.sort(this.func);
      console.log(this.Items);
      this.user = {
        userr: this.us,
        user_items:[{
        item_id:"",
        answer:""
        }]
      }
      this.onFormSubmit(this.user);

  })
  }

  updateUser(buttonId){

    switch (buttonId) {

      case buttonId="button1":
          this.ans="11"
          break;

      case buttonId="button2":
          this.ans="10"
          break;

      case buttonId="button3":
          this.ans="01"
          break;

     case buttonId="button4":
          this.ans="00"
          break;

    }
    this.user = {
      userr:this.us,
      user_items:[{
      item_id:this.Items[this.i].body,
      answer:this.ans
      }]
    }
    this.itemAPI.updateUser(this.user.userr, this.user.user_items).subscribe((res)=>{
      console.log(res);
    })
    this.i++;

    if(this.i==81){
      document.getElementById("resultButton").style.display = "block";
      document.getElementById('ansButtons').style.display = "none";
      document.getElementById('progressBar').style.display = "none";
      document.getElementById('itemsSlide').style.display = "none";
      document.getElementById('finishSlide').style.display = "block";
    }
  }

  onFormSubmit(user) {
    this.itemAPI.addUser(user)
      .subscribe((res) => {
        this.zone.run(() => {
          console.log(this.user)   
        })
      });
  }

  increaseProgress(){
    this.progress=this.progress+0.0121195122;
  }

func(a, b) {  
  return 0.5 - Math.random();
} 

slide(){ 
  this.slides.slideNext();
}

}
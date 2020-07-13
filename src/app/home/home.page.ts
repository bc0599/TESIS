import { Component, OnInit, NgZone } from '@angular/core';
import { PiaItemsService } from '../piaitems/piaitems.service';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import {User} from '../../../Shared/user'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

  providers: [PiaItemsService]
})

export class HomePage implements OnInit{

  constructor( private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    private itemAPI: PiaItemsService) {}
    
  ngOnInit(): void {
   
  }

  go(buttonId){

    switch (buttonId) {

      case buttonId="button1":
        this.router.navigate(['pia-careers']);
          break;

      case buttonId="button2":
        this.router.navigate(['pia-about-us']);
          break;

      case buttonId="button3":
        this.router.navigate(['piaitems']);
          break;

     case buttonId="button4":
        this.router.navigate(['pia-careers']);
          break;

    }
  }
}

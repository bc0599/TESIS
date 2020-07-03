import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PiaItemsService } from '../piaitems/piaitems.service';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../../../Shared/user'

@Component({
  selector: 'app-pia-pre-result',
  templateUrl: './piapreresult.page.html',
  styleUrls: ['./piapreresult.page.scss'],
  providers: [PiaItemsService]
})
export class PiaPreResultPage implements OnInit {
  user: User;
  progress:any=0;

  @ViewChild('slides', {static: false}) slides: IonSlides;

  constructor( 
    private router: Router,   
    private itemAPI: PiaItemsService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    
    this.itemAPI.getUser().subscribe((res)=>{
      console.log(res);
    })

    document.getElementById('ansButtons').style.display = "block";
    document.getElementById('resultButton').style.display = "none";

    }
    
  slide(){ 
    this.slides.slideNext();
  }

  increase(){
    this.progress=this.progress+1
    if(this.progress==4){
      document.getElementById('ansButtons').style.display = "none";
      document.getElementById('resultButton').style.display = "block";
    }
  }

}

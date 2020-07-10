import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PiaItemsService } from '../piaitems/piaitems.service';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../../../Shared/user'
import {Resultados} from '../../../Shared/resultados'
import {cloneDeep} from 'lodash';
import _ from 'lodash';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-pia-pre-result',
  templateUrl: './piapreresult.page.html',
  styleUrls: ['./piapreresult.page.scss'],
  providers: [PiaItemsService]
})
export class PiaPreResultPage implements OnInit {
  user: User;
  resultados: Resultados;
  progress:any=0;
  copyRes:any;
  deepCopy:any=[];
  derecho:number=0;
  csPoliticas:number=0;
  contaduria:number=0;
  psicologia:number=0;
  adminEmpresas:number=0;
  result:any=[];

  @ViewChild('slides', {static: false}) slides: IonSlides;

  constructor( 
    private router: Router,   
    private itemAPI: PiaItemsService,
    public route: ActivatedRoute) { }

  ngOnInit() {

    //Se obtiene  el ultimo usuario creado en bd
    this.itemAPI.getUser().subscribe((res)=>{
      console.log(res);
      this.copyRes=cloneDeep(res);
      this.deepCopy=cloneDeep(this.copyRes[0].user_items);
      console.log(this.deepCopy);

      for (var i=0; i < this.deepCopy.length; i++) {

        console.log(this.deepCopy.length);

        var item=this.deepCopy[i].item_id
        var answer= this.deepCopy[i].answer
        
        switch(item){

          case "1":

            switch(answer){
              case "11":
                this.contaduria+=1
              break;

              case "10":
                this.contaduria+=0.5;
                break;
              
              case "00":
                this.contaduria-=1
                break;

              case "01":
                this.contaduria-=0.5
                break;
            }
            break;
  
          case "2":

            switch(answer){
              case "11":
                this.derecho+=1;
                this.csPoliticas+=1
              break;

              case "10":
                this.derecho+=0.5
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.derecho-=1
                this.csPoliticas-=1
                break;

              case "01":
                this.derecho-=0.5
                this.csPoliticas-=0.5
                break;
            }
            break;

          case "3":

            switch(answer){
              case "11":
                this.contaduria+=1
              break;

              case "10":
                this.contaduria+=0.5
                break;
              
              case "00":
                this.contaduria-=1
                break;

              case "01":
                this.contaduria-=0.5
                break;
            }
            break;
  
          case "4":
            switch(answer){
              case "11":
                this.csPoliticas+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                break;

              case "01":
                this.csPoliticas-+0.5
                break;
            }
            
            break;

          case "5":
            switch(answer){

              case "11":
                this.csPoliticas+=1
                this.derecho+=1
                this.psicologia+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                this.derecho+=0.5
                this.psicologia+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                this.derecho-=1
                this.psicologia-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                this.derecho-=0.5
                this.psicologia-=0.5
                break;
            }
            break;
    
          case "6":
            
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
            break;

          case "7":
            
          switch(answer){
              case "11":
                this.psicologia-=1
              break;

              case "10":
                this.psicologia-=0.5
                break;
              
              case "00":
                this.psicologia+=1
                break;

              case "01":
                this.psicologia+=0.5
                break;
            }
            break;
    
          case "8":
            switch(answer){
              case "11":
                this.derecho+=1
                this.csPoliticas+=1
              break;

              case "10":
                this.derecho+=0.5
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.derecho-=1
                this.csPoliticas-=1
                break;

              case "01":
                this.derecho-=0.5
                this.csPoliticas-=0.5
                break;
            }
            break;

          case "9":
            switch(answer){
              case "11":
                this.csPoliticas+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                break;
            }
            break;
      
          case "10":
            switch(answer){
              case "11":
                this.contaduria-=1
              break;

              case "10":
                this.contaduria-=0.5
                break;
              
              case "00":
                this.contaduria+=1
                break;

              case "01":
                this.contaduria+=0.5
                break;
            }
            break;

          case "11":
            switch(answer){
              case "11":
                this.psicologia+=1
              break;

              case "10":
                this.psicologia+=0.5
                break;
              
              case "00":
                this.psicologia-=1
                break;

              case "01":
                this.psicologia-=0.5
                break;
            }
              break;
    
          case "12":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
              
          case "13":
            switch(answer){
              case "11":
                this.derecho-=1
                this.csPoliticas-=1
                this.psicologia-=1
              break;

              case "10":
                this.derecho-=0.5
                this.csPoliticas-=0.5
                this.psicologia-=0.5
                break;
              
              case "00":
                this.derecho+=1
                this.csPoliticas+=1
                this.psicologia+=1
                break;

              case "01":
                this.derecho+=0.5
                this.csPoliticas+=0.5
                this.psicologia+=0.5
                break;
            }
              break;
    
          case "14":
            switch(answer){
              case "11":
                this.contaduria+=1
                this.adminEmpresas+=1
              break;

              case "10":
                this.contaduria+=0.5
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.contaduria-=1
                this.adminEmpresas-=-1
                break;

              case "01":
                this.contaduria-=0.5
                this.adminEmpresas-=0.5
                break;
            }
              break;
  
          case "15":
            switch(answer){
              case "11":
                this.contaduria+=1
                this.adminEmpresas+=1
              break;

              case "10":
                this.contaduria+=0.5
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.contaduria-=1
                this.adminEmpresas-=1
                break;

              case "01":
                this.contaduria-=0.5
                this.adminEmpresas-=0.5
                break;
            }
              break;
      
          case "16":
            switch(answer){
              case "11":
                this.psicologia-=1
              break;

              case "10":
                this.psicologia-=0.5
                break;
              
              case "00":
                this.psicologia+=1
                break;

              case "01":
                this.psicologia+=0.5
                break;
            }
              break;
  
          case "17":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
      
          case "18":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
  
          case "19":
            switch(answer){
              case "11":
                this.csPoliticas+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                break;
            }
              break;
        
          case "20":
            switch(answer){
              case "11":
                this.derecho+=1
                this.csPoliticas+=1
              break;

              case "10":
                this.derecho+=0.5
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.derecho-=1
                this.csPoliticas-=1
                break;

              case "01":
                this.derecho-=0.5
                this.csPoliticas-=0.5
                break;
            }
              break;

          case "21":
            switch(answer){
              case "11":
                this.psicologia+=1
              break;

              case "10":
                this.psicologia+=0.5
                break;
              
              case "00":
                this.psicologia-=1
                break;

              case "01":
                this.psicologia-=0.5
                break;
            }
            break;

          case "22":
            switch(answer){
              case "11":
                this.derecho-=1
                this.csPoliticas-=1
              break;

              case "10": 
              this.derecho-=0.5
              this.csPoliticas-=0.5
                break;
              
              case "00":
                this.derecho+=1
                this.csPoliticas+=1
                break;

              case "01":
                this.derecho+=0.5
                this.csPoliticas+=0.5
                break;
            }
              break;
    
          case "23":
            switch(answer){
              case "11":
                this.derecho+=1
                this.csPoliticas+=1
              break;

              case "10":
                this.derecho+=0.5
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.derecho-=1
                this.csPoliticas-=1
                break;

              case "01":
                this.derecho-=0.5
                this.csPoliticas-=0.5
                break;
            }
              break;

          case "24":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
    
          case "25":
            switch(answer){
              case "11":
                this.psicologia+=1
              break;

              case "10":
                this.psicologia+=0.5
                break;
              
              case "00":
                this.psicologia-=1
                break;

              case "01":
                this.psicologia-=0.5
                break;
            }
              break;
  
          case "26":
            switch(answer){
              case "11":
                this.contaduria+=1
              break;

              case "10":
                this.contaduria+=0.5
                break;
              
              case "00":
                this.contaduria-=1
                break;

              case "01":
                this.contaduria-=0.5
                break;
            }
              break;
      
          case "27":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
  
          case "28":
            switch(answer){
              case "11":
                this.derecho-=1
                this.csPoliticas-=1
              break;

              case "10":
                this.derecho-=0.5
                this.csPoliticas-=0.5
                break;
              
              case "00":
                this.derecho+=1
                this.csPoliticas+=1
                break;

              case "01":
                this.derecho+=0.5
                this.csPoliticas+=0.5
                break;
            }
              break;
      
          case "29":
            switch(answer){
              case "11":
                this.csPoliticas+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                break;
            }
              break;
  
          case "30":
            switch(answer){
              case "11":
                this.derecho-=1
                this.csPoliticas-=1
                this.psicologia-=1
              break;

              case "10":
                this.derecho-=0.5
                this.psicologia-=0.5
                this.csPoliticas-=0.5
                break;
              
              case "00":
                this.derecho+=1
                this.psicologia+=1
                this.csPoliticas+=1
                break;

              case "01":
                this.derecho+=0.5
                this.psicologia+=0.5
                this.csPoliticas+=0.5
                break;
            }
              break;
        
          case "31":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;

          case "32":
            switch(answer){
              case "11":
                this.contaduria+=1
              break;

              case "10":
                this.contaduria+=0.5
                break;
              
              case "00":
                this.contaduria-=1
                break;

              case "01":
                this.contaduria-=0.5
                break;
            }
            break;

          case "33":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
    
          case "34":
            switch(answer){
              case "11":
                this.derecho-=1
                this.psicologia-=1
                this.csPoliticas-=1
              break;

              case "10":
                this.derecho-=0.5
                this.psicologia-=0.5
                this.csPoliticas-=0.5
                break;
              
              case "00":
                this.derecho+=1
                this.psicologia+=1
                this.csPoliticas+=1
                break;

              case "01":
                this.derecho+=0.5
                this.psicologia+=0.5
                this.csPoliticas+=0.5
                break;
            }
              break;

          case "35":
            switch(answer){
              case "11":
                this.derecho+=1
                this.csPoliticas+=1
              break;

              case "10":
                this.derecho+=0.5
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.derecho-=1
                this.csPoliticas-=1
                break;

              case "01":
                this.derecho-=0.5
                this.csPoliticas-=0.5
                break;
            }
              break;
    
          case "36":
            switch(answer){
              case "11":
                this.contaduria+=1
              break;

              case "10":
                this.contaduria+=0.5
                break;
              
              case "00":
                this.contaduria-=1
                break;

              case "01":
                this.contaduria-=0.5
                break;
            }
              break;
  
          case "37":
            switch(answer){
              case "11":
                this.psicologia-=1
              break;

              case "10":
                this.psicologia-=0.5
                break;
              
              case "00":
                this.psicologia+=1
                break;

              case "01":
                this.psicologia+=0.5
                break;
            }
              break;
      
          case "38":
            switch(answer){
              case "11":
                this.psicologia+=1
              break;

              case "10":
                this.psicologia+=0.5
                break;
              
              case "00":
                this.psicologia-=1
                break;

              case "01":
                this.psicologia-=0.5
                break;
            }
              break;
  
          case "39":
            switch(answer){
              case "11":
                this.psicologia+=1
              break;

              case "10":
                this.psicologia+=0.5
                break;
              
              case "00":
                this.psicologia-=1
                break;

              case "01":
                this.psicologia-=0.5
                break;
            }
              break;
      
          case "40":
            switch(answer){
              case "11":
                this.csPoliticas+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                break;
            }
              break;
  
          case "41":
            switch(answer){
              case "11":
                this.derecho+=1
              break;

              case "10":
                this.derecho+=0.5
                break;
              
              case "00":
                this.derecho-=1
                break;

              case "01":
                this.derecho-=0.5
                break;
            }
              break;
        
          case "42":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;

          case "43":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
            break;

          case "44":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
    
          case "45":
            switch(answer){
              case "11":
                this.csPoliticas+=1
                this.derecho+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                this.derecho+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                this.derecho-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                this.derecho-=0.5
                break;
            }
              break;

          case "46":
            switch(answer){
              case "11":
                this.psicologia+=1
              break;

              case "10":
                this.psicologia+=0.5
                break;
              
              case "00":
                this.psicologia-=1
                break;

              case "01":
                this.psicologia-=0.5
                break;
            }
              break;
    
          case "47":
            switch(answer){
              case "11":
                this.psicologia+=1
              break;

              case "10":
                this.psicologia+=0.5
                break;
              
              case "00":
                this.psicologia-=1
                break;

              case "01":
                this.psicologia-=0.5
                break;
            }
              break;
  
          case "48":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
      
          case "49":
            switch(answer){
              case "11":
                this.csPoliticas+=1
                this.derecho+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                this.derecho+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                this.derecho-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                this.derecho-=0.5
                break;
            }
              break;
  
          case "50":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
      
          case "51":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
  
          case "52":
            switch(answer){
              case "11":
                this.csPoliticas+=1
                this.adminEmpresas+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                this.adminEmpresas-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                this.adminEmpresas-=0.5
                break;
            }
              break;
        
          case "53":
            switch(answer){
              case "11":
                this.psicologia+=1
              break;

              case "10":
                this.psicologia+=0.5
                break;
              
              case "00":
                this.psicologia-=1
                break;

              case "01":
                this.psicologia-=0.5
                break;
            }
              break;

          case "54":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
            break;

          case "55":
            switch(answer){
              case "11":
                this.csPoliticas+=1
                this.derecho+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                this.derecho+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                this.derecho-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                this.derecho-=0.5
                break;
            }
              break;
    
          case "56":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;

          case "57":
            switch(answer){
              case "11":
                this.csPoliticas+=1
                this.psicologia+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                this.psicologia+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                this.psicologia-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                this.psicologia-=0.5
                break;
            }
              break;
    
          case "58":
            switch(answer){
              case "11":
                this.derecho+=1
                this.csPoliticas+=1
              break;

              case "10":
                this.derecho+=0.5
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.derecho-=1
                this.csPoliticas-=1
                break;

              case "01":
                this.derecho-=0.5
                this.csPoliticas-=0.5
                break;
            }
              break;
  
          case "59":
            switch(answer){
              case "11":
                this.derecho+=1
                this.csPoliticas+=1
              break;

              case "10":
                this.derecho+=0.5
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.derecho-=1
                this.csPoliticas-=1
                break;

              case "01":
                this.derecho-=0.5
                this.csPoliticas-=0.5
                break;
            }
              break;
      
          case "60":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
  
          case "61":
            switch(answer){
              case "11":
                this.csPoliticas+=1
                this.derecho+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                this.derecho+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                this.derecho-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                this.derecho-=0.5
                break;
            }
              break;
      
          case "62":
            switch(answer){
              case "11":
                this.csPoliticas+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                break;
            }
              break;
  
          case "63":
            switch(answer){
              case "11":
                this.psicologia+=1
              break;

              case "10":
                this.psicologia+=0.5
                break;
              
              case "00":
                this.psicologia-=1
                break;

              case "01":
                this.psicologia-=0.5
                break;
            }
              break;
        
          case "64":
            switch(answer){
              case "11":
                this.psicologia+=1
              break;

              case "10":
                this.psicologia+=0.5
                break;
              
              case "00":
                this.psicologia-=1
                break;

              case "01":
                this.psicologia-=0.5
                break;
            }
              break;

          case "65":
            switch(answer){
              case "11":
                this.csPoliticas+=1
                this.derecho+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                this.derecho+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                this.derecho-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                this.derecho-=0.5
                break;
            }
            break;

          case "66":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
    
          case "67":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;

          case "68":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
    
          case "69":
            switch(answer){
              case "11":
                this.psicologia+=1
              break;

              case "10":
                this.psicologia+=0.5
                break;
              
              case "00":
                this.psicologia-=1
                break;

              case "01":
                this.psicologia-=0.5
                break;
            }
              break;
  
          case "70":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
      
          case "71":
            switch(answer){
              case "11":
                this.contaduria+=1
              break;

              case "10":
                this.contaduria+=0.5
                break;
              
              case "00":
                this.contaduria-=1
                break;

              case "01":
                this.contaduria-=0.5
                break;
            }
              break;
  
          case "72":
            switch(answer){
              case "11":
                this.csPoliticas+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                break;
            }
              break;
      
          case "73":
            switch(answer){
              case "11":
                this.contaduria+=1
              break;

              case "10":
                this.contaduria+=0.5
                break;
              
              case "00":
                this.contaduria-=1
                break;

              case "01":
                this.contaduria-=0.5
                break;
            }
              break;
        
          case "75":
            switch(answer){
              case "11":
                this.contaduria+=1
              break;

              case "10":
                this.contaduria+=0.5
                break;
              
              case "00":
                this.contaduria-=1
                break;

              case "01":
                this.contaduria-=0.5
                break;
            }
              break;
          
          case "76":
            switch(answer){
              case "11":
                this.csPoliticas+=1
                this.psicologia+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                this.psicologia+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                this.psicologia-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                this.psicologia-=0.5
                break;
            }
            break;

          case "77":
            switch(answer){
              case "11":
                this.contaduria+=1
                this.adminEmpresas+=1
              break;

              case "10":
                this.contaduria+=0.5
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.contaduria-=1
                this.adminEmpresas-=1
                break;

              case "01":
                this.contaduria-=0.5
                this.adminEmpresas-=0.5
                break;
            }
              break;
    
          case "78":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;

          case "79":
            switch(answer){
              case "11":
                this.contaduria+=1
              break;

              case "10":
                this.contaduria+=0.5
                break;
              
              case "00":
                this.contaduria-=1
                break;

              case "01":
                this.contaduria-=0.5
                break;
            }
              break;
    
          case "80":
            switch(answer){
              case "11":
                this.adminEmpresas+=1
              break;

              case "10":
                this.adminEmpresas+=0.5
                break;
              
              case "00":
                this.adminEmpresas-=1
                break;

              case "01":
                this.adminEmpresas-=0.5
                break;
            }
              break;
  
          case "81":
            switch(answer){
              case "11":
                this.csPoliticas+=1
              break;

              case "10":
                this.csPoliticas+=0.5
                break;
              
              case "00":
                this.csPoliticas-=1
                break;

              case "01":
                this.csPoliticas-=0.5
                break;
            }
              break;
  
        }
      
} 
console.log(this.adminEmpresas)
console.log(this.psicologia)
console.log(this.derecho)
console.log(this.csPoliticas)
console.log(this.contaduria)  

var array=[{ carrera:'adminEmpresas', puntaje:this.adminEmpresas},
{ carrera:'psicologia', puntaje:this.psicologia},
{ carrera:'contaduria', puntaje:this.contaduria},
{ carrera:'derecho', puntaje:this.derecho},
{ carrera:'csPoliticas', puntaje:this.csPoliticas}]

array.sort(function(a, b) {
  return b.puntaje- a.puntaje;
});

var fArray= array.filter(function (c) {
  return c.puntaje > 0;
});

if(fArray.length===0){

  fArray.push({carrera:'indeterminado', puntaje:null})
  
}

this.resultados=cloneDeep(fArray);

this.itemAPI.reupdateUser(this.copyRes[0].userr, this.resultados).subscribe((res)=>{
  console.log(res)
})


this.itemAPI.getComparison(this.resultados[0]).subscribe((res1)=>{
  console.log('estas son las comparaciones'+res1);
})
    })

    // Manejo de botones y vistas
    document.getElementById('ansButtons').style.display = "block";
    document.getElementById('resultButton').style.display = "none";
    
  }
    
  slide(){ 
    this.slides.slideNext();
  }

  // Manejo de botones y vistas
  increase(){
    this.progress=this.progress+1
    if(this.progress==4){
      document.getElementById('ansButtons').style.display = "none";
      document.getElementById('resultButton').style.display = "block";
    }
    
  }

}

import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PiaItemsService } from '../piaitems/piaitems.service';
import { Router } from '@angular/router';
import {cloneDeep} from 'lodash';
import { NavController } from '@ionic/angular';
import {Results} from '../../../Shared/results'
import * as _ from 'lodash';

@Component({
  selector: 'app-pia-pre-result',
  templateUrl: './piapreresult.page.html',
  styleUrls: ['./piapreresult.page.scss'],
  providers: [PiaItemsService]
})
export class PiaPreResultPage {
  results:Results;
  partialResults:any=[];
  progress:any=0;
  responseCopy:any;
  itemsCopy:any=[];
  compareCopy:any=[];
  retreivedUsers:any=[];
  matches:any=[];
  finalMatches:any=[];
  finalPercentages:any=[];
  derecho:number=0;
  csPoliticas:number=0;
  contaduria:number=0;
  psicologia:number=0;
  adminEmpresas:number=0;

  @ViewChild('slides', {static: false}) slides: IonSlides;

  constructor( 
    private router: Router,   
    private itemAPI: PiaItemsService,
    private navCtrl: NavController
  ) { }

  ionViewWillEnter() {

    //Se obtiene  el ultimo usuario creado en bd
    this.itemAPI.getUser().subscribe((res)=>{

      console.log(res);

      //Se realizan dos copias profunda de la respuesta del servidor para manejar la data
      this.responseCopy=cloneDeep(res);

      sessionStorage.setItem('user', this.responseCopy[0].userr)

      //Se almacena la data relevante sobre el usuario en un arreglo 
      this.itemsCopy=cloneDeep(this.responseCopy[0].user_items);
      console.log(this.itemsCopy);

      //Se recorre el arreglo para analizar las respuestas proporcionadas por el usuario

      for (var i=0; i < this.itemsCopy.length; i++) {

        console.log(this.itemsCopy.length);

        var item=this.itemsCopy[i].item_id
        var answer= this.itemsCopy[i].answer
        
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

//Se crea un arreglo de objetos para ser ingresados posteriormente en bd

var careersArray=[ 
{career:'adminEmpresas', points:this.adminEmpresas},
{ career:'psicologia', points:this.psicologia},
{ career:'contaduria', points:this.contaduria},
{ career:'derecho', points:this.derecho},
{ career:'csPoliticas', points:this.csPoliticas}
]

//Se ordena el arreglo en orden ascendente para establecer el orden de los partialResults obtenidos
careersArray.sort(function(a, b) {
  return b.points- a.points;
});

//Se filtra el arreglo para eliminar todos los partialResults menores a cero
this.partialResults= careersArray.filter(function (c) {
  return c.points > 0;
});

//Se condiciona en caso de que el arreglo quede vacio luego de la filtracion 
if(this.partialResults.length===0){
  this.results={career:null,points:null,coincidence_percentage:null,coincidence_questions:null}
}

console.log(this.partialResults)
//Se efectua una copia profunda del arreglo resultante para guardado y extraccion de data 

if(this.partialResults.length===1){

this.compareUsers(this.partialResults[0].career, this.partialResults[0].points)
}

if(this.partialResults.length===2){
  for(let se=0;se<2;se++){
    this.compareUsers(this.partialResults[se].career, this.partialResults[se].points)
    
      }
}

if(this.partialResults.length===3){
  for(let op=0;op<3;op++){
    this.compareUsers(this.partialResults[op].career, this.partialResults[op].points)
    
      }
  
}

if(this.partialResults.length===4){
  for(let we=0;we<3;we++){
this.compareUsers(this.partialResults[we].career, this.partialResults[we].points)

  }
}

if(this.partialResults.length===5){
  for(let yu=0;yu<3;yu++){
    this.compareUsers(this.partialResults[yu].career, this.partialResults[yu].points)
      }
}

})

    // Manejo de botones y vistas
    document.getElementById('ansButtons').style.display = "block";
    document.getElementById('resultButton').style.display = "none";

  }

  compareUsers(partialResults, points){

      this.itemAPI.getComparison(partialResults).subscribe((res1)=>{
        console.log('estas son las comparaciones'+ res1);
      
        this.compareCopy=cloneDeep(res1);
      
          //Se ordenan en orden ascendente los arreglos que reultan de la busqueda anterior
          for(let j=0; j<this.compareCopy.length; j++){
            this.compareCopy[j].user_items.sort(function(a, b) {
              return parseFloat(a.item_id) - parseFloat(b.item_id);
          });
          }
          // Se ordenan en forma ascendente el arreglo que contiene las respuestas del usuario actual
            this.itemsCopy.sort(function(a, b) {
            return parseFloat(a.item_id) - parseFloat(b.item_id);
          });
          //Se integran las respuesas de los usuarios recopilados a un solo arreglo, creando un arreglo multidimensional 
          var ru: any=[];
          for(var w=0; w<this.compareCopy.length; w++){
            ru.push(this.compareCopy[w].user_items)
            }
          
            //Se ejecuta una copia profunda de el arreglo resultante de la operacion anterior
            this.retreivedUsers=cloneDeep(ru);
         
           //Se ingresan dos arreglos, siendo el primero el arreglo multidimensional y el segundo el arregloe que contiene las respuestas del usuario actual
          for(var t=0; t<this.retreivedUsers.length; t++){
      
            //Se obtiene la interseccion entre ambos arreglos
            this.matches.push( _.intersectionWith(this.retreivedUsers[t], this.itemsCopy,  _.isEqual)); 
            var arrayPercentages:any=[]
            arrayPercentages.push(this.matches[t].length/this.itemsCopy.length); 
        
            }
            //Se calcula el porcentaje de coincidencias entre el usuario y cada uno de los usuarios con respuestas similares y se calcula el promedio entre dichos porcentajes
            arrayPercentages = arrayPercentages.map(function(x){ return x * 100; });
            this.finalPercentages=_.mean(arrayPercentages);
        
           // Se ingresan todas las respuestas de los usuarios adyacentes en un arreglo que luego pasa a ser unidimensional 
           var fM:any=[];
        
           fM=cloneDeep( _.flattenDeep(this.matches))
        
           //Se ordena el arreglo unidimensional en orden ascendente
           fM.sort(function(a, b) {
              return parseFloat(a.item_id) - parseFloat(b.item_id);
          });
        
          //Se identifican las coincidencias entre los arreglos y se organizan ascendentemente 
            const lookup = fM.reduce((a, e) => {
            a[e.item_id] = ++a[e.item_id] || 0;
            return a;
          }, {});
        
          this.finalMatches=fM.filter(e => lookup[e.item_id]);
        
          //Se eliminan los elementos duplicados
          this.finalMatches=_.uniqWith(this.finalMatches, _.isEqual);

            this.results={career:partialResults,points:points,coincidence_percentage:this.finalPercentages,coincidence_questions:this.finalMatches}

            if((this.finalPercentages<=100)&&(this.finalPercentages>90)){
              this.results.points+=3
            }

            if((this.finalPercentages<=90)&&(this.finalPercentages>80)){
              this.results.points+=2.7
            }

            if((this.finalPercentages<=80)&&(this.finalPercentages>70)){
              this.results.points+=2.4
            }

            if((this.finalPercentages<=70)&&(this.finalPercentages>60)){
              this.results.points+=2.1
            }

            if((this.finalPercentages<=60)&&(this.finalPercentages>50)){
              this.results.points+=1.8
            }

            if((this.finalPercentages<=50)&&(this.finalPercentages>40)){
              this.results.points+=1.5
            }

            if((this.finalPercentages<=40)&&(this.finalPercentages>30)){
              this.results.points+=1.2
            }

            this.itemAPI.reupdateUser(this.responseCopy[0].userr, this.results).subscribe((res)=>{
              console.log(res)
              })

          })

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

  go(buttonId){

    switch (buttonId) {
  
      case buttonId="button2":
        this.router.navigate(['piaresult']);
          break;
  
    }
  }

  goPrevious(){
    this.navCtrl.back();
  }

}

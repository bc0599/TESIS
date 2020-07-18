import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PiaItemsService } from '../piaitems/piaitems.service';
import { ActivatedRoute, Router } from '@angular/router';
import {cloneDeep} from 'lodash';
import * as _ from 'lodash';

@Component({
  selector: 'app-pia-pre-result',
  templateUrl: './piapreresult.page.html',
  styleUrls: ['./piapreresult.page.scss'],
  providers: [PiaItemsService]
})
export class PiaPreResultPage {
  resultados:any=[];
  progress:any=0;
  copyRes:any;
  deepCopy:any=[];
  compareCopy:any=[];
  retreivedUsers:any=[];
  matches:any=[];
  percentages:any
  flattenMatches:any=[];
  finalPercentages:any=[];
  finalMatches:any=[];
  derecho:number=0;
  csPoliticas:number=0;
  contaduria:number=0;
  psicologia:number=0;
  adminEmpresas:number=0;

  @ViewChild('slides', {static: false}) slides: IonSlides;

  constructor( 
    private router: Router,   
    private itemAPI: PiaItemsService,
    public route: ActivatedRoute) { }

  ionViewWillEnter() {

    //Se obtiene  el ultimo usuario creado en bd
    this.itemAPI.getUser().subscribe((res)=>{

      console.log(res);

      //Se realizan dos copias profunda de la respuesta del servidor para manejar la data
      this.copyRes=cloneDeep(res);

      //Se almacena la data relevante sobre el usuario en un arreglo 
      this.deepCopy=cloneDeep(this.copyRes[0].user_items);
      console.log(this.deepCopy);

      //Se recorre el arreglo para analizar las respuestas proporcionadas por el usuario

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

//Se crea un arreglo de objetos para ser ingresados posteriormente en bd

var array=[ 
{carrera:'adminEmpresas', puntaje:this.adminEmpresas},
{ carrera:'psicologia', puntaje:this.psicologia},
{ carrera:'contaduria', puntaje:this.contaduria},
{ carrera:'derecho', puntaje:this.derecho},
{ carrera:'csPoliticas', puntaje:this.csPoliticas}
]

//Se ordena el arreglo en orden ascendente para establecer el orden de los resultados obtenidos
array.sort(function(a, b) {
  return b.puntaje- a.puntaje;
});

//Se filtra el arreglo para eliminar todos los resultados menores a cero
this.resultados= array.filter(function (c) {
  return c.puntaje > 0;
});

//Se condiciona en caso de que el arreglo quede vacio luego de la filtracion 
if(this.resultados.length===0){
  this.resultados.push({carrera:'indeterminado', puntaje:null})
}

console.log(this.resultados)
//Se efectua una copia profunda del arreglo resultante para guardado y extraccion de data 

if(this.resultados.length===1){

this.compareUsers(this.resultados[0].carrera)
}

if(this.resultados.length===2){
  for(let op=0;op<2;op++){
    this.compareUsers(this.resultados[op].carrera)
    
      }
}

if(this.resultados.length===3){
  for(let op=0;op<3;op++){
    this.compareUsers(this.resultados[op].carrera)
    
      }
  
}

if(this.resultados.length===4){
  for(let we=0;we<3;we++){
this.compareUsers(this.resultados[we].carrera)

  }
}

if(this.resultados.length===5){
  for(let yu=0;yu<3;yu++){
    this.compareUsers(this.resultados[yu].carrera)
    
      }
}


})

    
    // Manejo de botones y vistas
    document.getElementById('ansButtons').style.display = "block";
    document.getElementById('resultButton').style.display = "none";

  }

  compareUsers(resultados){

      this.itemAPI.getComparison(resultados).subscribe((res1)=>{
        console.log('estas son las comparaciones'+ res1);
      
        this.compareCopy=cloneDeep(res1);
      
          //Se ordenan en orden ascendente los arreglos que reultan de la busqueda anterior
          for(let j=0; j<this.compareCopy.length; j++){
            this.compareCopy[j].user_items.sort(function(a, b) {
              return parseFloat(a.item_id) - parseFloat(b.item_id);
          });
          }
          // Se ordenan en forma ascendente el arreglo que contiene las respuestas del usuario actual
            this.deepCopy.sort(function(a, b) {
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
            this.matches.push( _.intersectionWith(this.retreivedUsers[t], this.deepCopy,  _.isEqual)); 
            var arrayPercentages:any=[]
            arrayPercentages.push(this.matches[t].length/this.deepCopy.length); 
        
            }
            //Se calcula el porcentaje de coincidencias entre el usuario y cada uno de los usuarios con respuestas similares y se calcula el promedio entre dichos porcentajes
            arrayPercentages = arrayPercentages.map(function(x){ return x * 100; });
            this.percentages=_.mean(arrayPercentages);
        
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
        
          this.flattenMatches=fM.filter(e => lookup[e.item_id]);
        
          //Se eliminan los elementos duplicados
          this.flattenMatches=_.uniqWith(this.flattenMatches, _.isEqual);
          this.finalPercentages.push({carrera:resultados,porcentaje:this.percentages,preguntas:this.flattenMatches})
          })
          console.log(this.finalPercentages)

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

}

import { Component, OnInit, NgZone } from '@angular/core';
import { PiaItemsService } from './piaitems.service';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import {cloneDeep} from 'lodash';
import {User} from '../../../Shared/user';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-piaitems',
  templateUrl: './piaitems.page.html',
  styleUrls: ['./piaitems.page.scss'],
  
  providers: [PiaItemsService]
})

export class PiaItemsPage implements OnInit {

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
    private itemAPI: PiaItemsService,
    private navCtrl: NavController
    ) {}

    ngOnInit(){
    
    //Previene al usuario de dejar o refrescar la pagina
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
      e.returnValue = confirmationMessage;  
      return confirmationMessage;    
         
  });

}
ionViewWillEnter(){
  //Manejo de botones al empezar la encuesta
  document.getElementById("resultButton").style.display = "none";
  document.getElementById('finishSlide').style.display = "none";

  //Se colectan los items de la bd

    this.itemAPI.getItemList().subscribe((res) => {

      //Se efectua una copia profunda del resultado para agilizar la app
      this.response= cloneDeep(res);

      //Aletorizar el orden de los items y se crea un identificador de usuario unico para manejo de data
      this.Items= this.response.sort(this.func);
      console.log(this.Items);

  })
  }

  updateUser(buttonId){

    //Se recibe el identificador del boton para asignar respuesta a las afirmaciones
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

    //Llena el formulario de datos para la actualizacion del usuario previamente creado con el fin de agregar respuestas sistematicamente
    this.user = {
      userr:this.us,
      result:[{
        career:null,
        points:null,
        coincidence_percentage:null,

        coincidence_questions:[{
      
              item_id:null,
              answer:null
          }]
      }],
      user_items:[{
      item_id:this.Items[this.i].title,
      answer:this.ans
      }]
    }

    // Se envia el formulario a la base de datos 
    this.itemAPI.updateUser(this.user.userr, this.user.user_items).subscribe((res)=>{
      console.log(res);
    })
    this.i++;

    //Manejo de los botones luego de terminar la encuesta

    if(this.i==80){
      document.getElementById("resultButton").style.display = "block";
      document.getElementById('ansButtons').style.display = "none";
      document.getElementById('progressBar').style.display = "none";
      document.getElementById('itemsSlide').style.display = "none";
      document.getElementById('finishSlide').style.display = "block";
    }

}

  //Aumenta el progreso en la barra de progreso
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
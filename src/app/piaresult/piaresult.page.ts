import { Component, OnInit } from '@angular/core';
import { PiaItemsService } from '../piaitems/piaitems.service';
import {cloneDeep} from 'lodash';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-piaresult',
  templateUrl: './piaresult.page.html',
  styleUrls: ['./piaresult.page.scss'],
  providers: [PiaItemsService]
})
export class PiaresultPage implements OnInit {

  userArray:any=[];
  resultCardArray:any=[];

  constructor(private itemAPI: PiaItemsService, private router: Router, private navCtrl: NavController ) { }

  ngOnInit(){
        //Previene al usuario de dejar o refrescar la pagina
        window.addEventListener("beforeunload", function (e) {
          var confirmationMessage = "\o/";
          e.returnValue = confirmationMessage;  
          return confirmationMessage;   
        
  });

    var user= sessionStorage.getItem('user')
    console.log(user)

    this.itemAPI.getFinalUser(user).subscribe((res)=>{

      this.userArray=cloneDeep(res[0])
      this.userArray.result.sort(function(a, b) {
        return b.points - a.points;
      });
      console.log(this.userArray.result)

      for(let i=0;i<this.userArray.result.length;i++){

      switch(this.userArray.result[i].career){

        case "contaduria":
          this.resultCardArray.push({career:'Contaduria',img:'contaduria-result', careerType:'Ciencias Sociales' ,description:' Trabajan tanto para el sector público, como para el privado y son aquellos profesionales responsables del estado financiero y de los libros contables del individuo o empresa que haya solicitado sus servicios, en tal sentido, su misión consiste en velar que su clientela cumpla con la legislación aplicable y con los procedimientos establecidos, garantizar que haya registro de los ingresos y egresos de sus cuentas , brindar información financiera a la gerencia al investigar y analizar datos contables y preparar entradas de activos, pasivos y cuentas de capital compilando y analizando la información de la cuenta.'},)
          break;

        case "derecho":
          this.resultCardArray.push({career:'Derecho',img:'derecho-result',careerType:'Ciencias Sociales', description:'Representa a clientes en litigios penales y civiles y otros procedimientos legales, redacta documentos legales o administra o asesora a clientes en transacciones legales. Puede especializarse en un área única o puede practicar en general. Puede presentar y contribuir con soluciones pacíficas, efectivas y justas, a los conflictos de la sociedad, ya sea como funcionario público, administrador de justicia, litigante, asesor o investigador socio jurídico en los diversos campos del Derecho, con una visión clara y concreta de la realidad nacional e internacional y con una misión humanística trascendental, comprometido con los principios éticos-morales tanto en el ejercicio de su profesión como en la vida personal y social, siendo un baluarte para la justicia y consolidando está hacia los fines sociales.'},)
          break;

        case "adminEmpresas":
          this.resultCardArray.push({career:'Administracion de Empresas', img:'admin-result', careerType:'Ciencias Sociales',  description:'Las tareas del administrador de negocios incluirán la supervisión y el análisis de las operaciones financieras, la aprobación de compras y gastos, la mediación entre el personal y otros ejecutivos, el nombramiento de jefes de departamento.Consciente de que las organizaciones están inmersas en un mundo globalizado y altamente competitivo, está llamado a conocer, organizar, dirigir, interpretar e integrar las diferentes variables que componen el entorno empresarial a nivel regional, nacional e internacional.'},)
          break;

        case "psicologia":
          this.resultCardArray.push({career:'Psicologia',img:'psicologia-result', careerType:'Ciencias Sociales', description:' Los psicólogos estudian los procesos cognitivos, emocionales y sociales y el comportamiento humano mediante el análisis de cómo las personas se relacionan entre sí y sus entornos. Realizan la medición y valoración del estado de salud del paciente e identifica los problemasy necesidades de atención psicológica con veracidad, asumen con responsabilidad y compromiso ético el proceso de tratamiento y rehabilitaciónpsicológica, integrando el conocimiento científico y su juicio crítico a las situaciones presentadas con precisión.'},)
          break;

        case"csPoliticas":
        this.resultCardArray.push({career:'Ciencias Politicas',img:'cspoliticas-result',careerType:'Ciencias Sociales',description:'Los politólogos estudian el origen, el desarrollo y el funcionamiento de los sistemas políticos. Investigan ideas políticas y analizan gobiernos, políticas,tendencias políticas y cuestiones relacionadas. Reconocen desde su historicidad los elementos conceptuales que constituyen el objeto de estudio de la disciplina: estado, sistema político y gobierno; con capacidad de intervenir en la realidad política desde una postura analítica, crítica y de investigación, atenderá a la sociedad en general, a las demandasde personal que generan nuestras instituciones públicas y privadas, y los actores políticos (organizaciones civiles, no gubernamentales, partidos políticos).'},)
        break;

        default:
          this.resultCardArray.push({career:'Indeterminado',img:'indeterminado-result', careerType:'', description:'Lo sentimos! Parece que las carreras que se evaluan en la presente prueba tienen una coincidencia indeterminada con respecto a tu perfil universitario.'},)
          break;
      } 

    }
    this.resultCardArray=_.uniqWith(this.resultCardArray, _.isEqual);
    console.log(this.resultCardArray)
    })

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
        this.router.navigate(['home']);
          break;

    }
  }

}

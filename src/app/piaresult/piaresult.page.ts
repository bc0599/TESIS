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
         
        this.resultCardArray.push({career:'Contaduria',img:'contaduria-result', careerType:'Ciencias Sociales' ,description:' Trabajan tanto para el sector público, como para el privado y son aquellos profesionales responsables del estado financiero y de los libros contables del individuo o empresa que haya solicitado sus servicios, en tal sentido, su misión consiste en velar que su clientela cumpla con la legislación aplicable y con los procedimientos establecidos, garantizar que haya registro de los ingresos y egresos de sus cuentas , brindar información financiera a la gerencia al investigar y analizar datos contables y preparar entradas de activos, pasivos y cuentas de capital compilando y analizando la información de la cuenta.',
        
        habilities:'Debe una buena capacidad de pensamiento lógico y abstracto que le permita analizar y comprender hechos que pasan desapercibidos del resto del equipo, entender las problemáticas y elegir las alternativas adecuadas. Ademas, necesita contar con la habilidad de intervenir en la implementación y administración de presupuestos, en la evaluación de proyectos y en el análisis financiero de empresas públicas y privadas, es importante que el mismo posea relaciones interpersonales sanas y empáticas para lograr que el flujo de trabajo marche de la mejor manera posible.'})
        
        break;

        case "derecho":
        
        this.resultCardArray.push({career:'Derecho',img:'derecho-result',careerType:'Ciencias Sociales', description:'Representa a clientes en litigios penales y civiles y otros procedimientos legales, redacta documentos legales o administra o asesora a clientes en transacciones legales. Puede especializarse en un área única o puede practicar en general. Puede presentar y contribuir con soluciones pacíficas, efectivas y justas, a los conflictos de la sociedad, ya sea como funcionario público, administrador de justicia, litigante, asesor o investigador socio jurídico en los diversos campos del Derecho, con una visión clara y concreta de la realidad nacional e internacional y con una misión humanística trascendental, comprometido con los principios éticos-morales tanto en el ejercicio de su profesión como en la vida personal y social, siendo un baluarte para la justicia y consolidando está hacia los fines sociales.',
        
        habilities:'Es un apasionado natural por la lectura, pero tambien buen investigador para preparar sus estrategias legales. Tiene la habilidad para hablar en publico con gran facilidad, ordenando sus ideas con eficacia, defendiendo sus argumentos con firmeza para demostrar y convencer al projimo que su postura es la correcta. Es capaz de analizar grandes cantidades de informacion y pensar en soluciones razonables ante situaciones criticas, con la finalidad de negociar las posibilidades a favor de los intereses de sus clientes, evitando llegar a conflictos mayores.'},)
        
        break;

        case "adminEmpresas":
          
        this.resultCardArray.push({career:'Administracion de Empresas', img:'admin-result', careerType:'Ciencias Sociales',  description:'Las tareas del administrador de negocios incluirán la supervisión y el análisis de las operaciones financieras, la aprobación de compras y gastos, la mediación entre el personal y otros ejecutivos, el nombramiento de jefes de departamento.Consciente de que las organizaciones están inmersas en un mundo globalizado y altamente competitivo, está llamado a conocer, organizar, dirigir, interpretar e integrar las diferentes variables que componen el entorno empresarial a nivel regional, nacional e internacional.',
        
        habilities:'Es un profesional creativo, recursivo e ingenioso, con capacidad de análisis y síntesis, lo que le permite el correcto planteamiento de una idea o solución innovadora frente a escenarios dinámicos presentes en el universo empresarial, con valores morales y principios éticos. Cuenta con autonomía intelectual que le permite ser un crítico constructivo y formular los cuestionamientos necesarios cuando sea indispensable. Tiene facilidad para comunicarse con un lenguaje claro, correcto, oportuno, adecuado y universal. Con habilidad en la negociación, que se traduce en la rápida construcción de consensos y en la adecuada administración de los disensos.'},)
        
        break;

        case "psicologia":
          
        this.resultCardArray.push({career:'Psicologia',img:'psicologia-result', careerType:'Ciencias Sociales', description:' Los psicólogos estudian los procesos cognitivos, emocionales y sociales y el comportamiento humano mediante el análisis de cómo las personas se relacionan entre sí y sus entornos. Realizan la medición y valoración del estado de salud del paciente e identifica los problemasy necesidades de atención psicológica con veracidad, asumen con responsabilidad y compromiso ético el proceso de tratamiento y rehabilitaciónpsicológica, integrando el conocimiento científico y su juicio crítico a las situaciones presentadas con precisión.',
        
        habilities:'Constituye un individuo empatico,  que debe ir más allá de ser simplemente un oyente de los sucesos y tiene que ponerse en el lugar del paciente para poder interpretar lo que este puede estar sintiendo. El especialista debe ser una persona de mente abierta que pueda comprender por qué otra se comporta de determinada manera, y tolerante para aceptar esas conductas, debe inspirar confianza para que las personas se sientan cómodas al momento de expresar sus emociones. Para lograr lo anteriormente descrito debe transmitir en su gestualidad, mucha confianza y tranquilidad. A su vez, la paciencia es esencial en el desarrollo de sus actividades puesto que La psicoterapia es un proceso largo en donde ocurren retrocesos.'},)
        
        break;

        case"csPoliticas":
        
        this.resultCardArray.push({career:'Ciencias Politicas', img:'cspoliticas-result',careerType:'Ciencias Sociales',description:'Los politólogos estudian el origen, el desarrollo y el funcionamiento de los sistemas políticos. Investigan ideas políticas y analizan gobiernos, políticas,tendencias políticas y cuestiones relacionadas. Reconocen desde su historicidad los elementos conceptuales que constituyen el objeto de estudio de la disciplina: estado, sistema político y gobierno; con capacidad de intervenir en la realidad política desde una postura analítica, crítica y de investigación, atenderá a la sociedad en general, a las demandasde personal que generan nuestras instituciones públicas y privadas, y los actores políticos (organizaciones civiles, no gubernamentales, partidos políticos).',
        
        habilities:'Asume el liderazgo comprometido con las necesidades sociales y profesionales para promover el cambio social pertinente. Mantiene una actitud de compromiso y respeto hacia la diversidad de prácticas sociales y culturales que reafirman el principio de integración en el contexto local, nacional e internacional. Utiliza los lenguajes lógico, formal, matemático, icónico, verbal y no verbal de acuerdo a su etapa de vida. Maneja las tecnologías de la información y la comunicación como herramienta para el acceso a la información y su transformación en conocimiento, así como para el aprendizaje y trabajo colaborativo con técnicas de vanguardia que le permitan su participación constructiva en la sociedad.'},)
        
        break;

        default:
        
        this.resultCardArray.push({career:'Indeterminado',img:'indeterminado-result', careerType:'', description:'Lo sentimos! Parece que las carreras que se evaluan en la presente prueba tienen una coincidencia indeterminada con respecto a tu perfil universitario. Sin embargo, ten en cuenta que en esta prueba se evaluan carreras relacionadas principalmente a las ciencias sociales, por lo tanto, existe la probabilidad de que tus cualidades no encajen con el estudio realizado para este test. Te recomendamos continuar con tu investigacion de forma metodica y exhaustiva puesto que los resultados que se proveen aqui no constituyen un factor definitorio en tu experiencia universitaria. '},)
        
        document.getElementById('caract-card').style.display = "none";
        
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

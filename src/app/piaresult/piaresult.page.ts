import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piaresult',
  templateUrl: './piaresult.page.html',
  styleUrls: ['./piaresult.page.scss'],
})
export class PiaresultPage implements OnInit {

  constructor() { }

  ngOnInit() {
        // Manejo de botones y vistas
        document.getElementById('Psicologia').style.display = "none";
        document.getElementById('Derecho').style.display = "none";
        document.getElementById('csPoliticas').style.display = "none";
        document.getElementById('Contaduria').style.display = "none";
        document.getElementById('Administracion').style.display = "none";
  }

}

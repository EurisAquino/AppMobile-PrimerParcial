import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  public numero : number = null ;

  public tabla = [];

  Generar(){
    this.tabla = [];
    if(this.numero > 0){
      for(let i = 1; i<= 14; i++){
        this.tabla.push(i);
      }
    }
  }
  Limpiar(){
    this.tabla = [];
    this.numero = null;
  }
  constructor() { }

  ngOnInit() {
  }

}

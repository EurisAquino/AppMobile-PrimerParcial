import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-mayor',
  templateUrl: './mayor.page.html',
  styleUrls: ['./mayor.page.scss'],
})
export class MayorPage implements OnInit {

  public numero1 : number = null;
  public numero2 : number = null;
  public resultado : string = "";

  Limpiar(){
    this.numero1 = null;
    this.numero2 = null;
    this.resultado = null;
  }

  Generar(){
    if(this.numero1 > 0 && this.numero2 > 0){
      if(this.numero1 > this.numero2){
        this.resultado = this.numero1 + " es mayor que " + this.numero2
      }else if(this.numero2 > this.numero1){
        this.resultado = this.numero2 + " es mayor que " + this.numero1
      }else{
        this.resultado = "Ambos numeros son iguales!"
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

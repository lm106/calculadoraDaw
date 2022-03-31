import { Component, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {
  resultado:number=0;
  num1:number=0;
  num2:number=0;
  flag:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  reset():void{
    this.num1=0;
    this.num2=0;
  }
  value(num:number):void{
    if (this.num1!=0){
      this.num1 =num;
    } else{
      this.num2 =num;
    }
  }
  setOperacion(operacion:string):void{
    switch(operacion){
      case '+':
        this.sumar;
        break;
      case '-':
        this.restar;
        break;
      case 'x':
        this.multiplicar;
        break;
      case '/':
        this.dividir;
        break;
    }

  }
  getResultado(): number{
    this.flag=true;
    return this.resultado;
  }
  sumar(num1:string, num2:string):void{
    this.resultado=parseInt(num1)+parseInt(num2);
    this.reset;
  }
  
  restar(num1:string, num2:string):void{
    this.resultado=parseInt(num1)-parseInt(num2);
    this.reset;
  }
  
  dividir(num1:string, num2:string):void{
    this.resultado=parseInt(num1)/parseInt(num2);
    this.reset;
  }
  multiplicar(num1:string, num2:string):void{
    this.resultado=parseInt(num1)*parseInt(num2);
    this.reset;
  }
  
}

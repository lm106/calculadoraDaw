import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  resultado:number=0;
  final:number = 0;
  num1:string='';
  num2:string='';
  operacion:boolean=false;
  type:string='';
  mostrar:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  reset():void{
    this.num1='';
    this.num2='';
    this.type='';
    this.operacion=false;
  }
  value(num:string):void{
    this.mostrar=false;
    if(!this.operacion)  {
      this.num1 += num;
    } else{
      this.num2 +=num;
    }
  }
  setOperacion(operacion:string):void{
    if(!this.operacion){
      this.type=operacion;
      this.operacion=true;
      this.comprobar();
    }else{
      this.calculate();
      if(operacion =='='){
        this.mostrar=true;
        this.final = this.resultado;
        this.resultado = 0;
      }
      this.reset();
    }
  }
  comprobar():void{
    if (this.resultado !=0 && this.num1 != ''){
      this.num2=this.resultado.toString();
      this.resultado=0;
      this.operacion=true;
      this.calculate();
      this.reset();
     } else if (this.resultado !=0 && this.num1 ==''){
       this.num1=this.resultado.toString();
       this.resultado=0;
     }
  }
  calculate():void{
    if(this.num2!=''){
      switch(this.type){
        case '+':
          this.sumar();
          break;
        case '-':
          this.restar();
          break;
        case 'x':
          this.multiplicar();
          break;
        case '/':
          this.dividir();
          break;
      }
    }
  }
  sumar():void{
      this.resultado=parseInt(this.num1)+ parseInt(this.num2);
  }
  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2);
  }
  dividir():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2);
  }
  multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2);
  }

}

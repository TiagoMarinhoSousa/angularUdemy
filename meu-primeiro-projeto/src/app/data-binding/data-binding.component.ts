import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Tiago";
  public idade: number = 39;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;
  public imgSrc: string = "../../assets/img/img1.jpg"
  public imgTitle: string = "Property Binding"

  public position: {
    x: number,
    y: number
  } = { x: 0, y:0 }

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo (){
    alert('Evento de click');
  }

  public alertaInfo2(valor: MouseEvent){
    console.log(valor);
  }

  public positionTest(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}

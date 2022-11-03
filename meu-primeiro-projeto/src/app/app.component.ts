import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponente()">Destruir Componente</button>
    <!-- {{ valor }}
    <button (click)="adicionar()">Adicionar</button> -->
    <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {


  constructor() {

   }
   public destruir:boolean = true;
   public destruirComponente(){
    this.destruir = false;
   }
  // public valor: number = 1;
  //  public adicionar():number {
  //   return this.valor += 1;
  //  }

  ngOnInit(): void { }


  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = 'Hola Mundo';

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    if( this.termino.trim().length === 0 ){
      return;
    }

    console.log(this.termino);
    this.termino = '';
  }

}

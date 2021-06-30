import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Pais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styles: [
  ]
})
export class SugerenciasComponent implements OnInit {

  @Input() page:string = '';
  @Input() termino: string = '';
  @Input() paisesSugeridos: Pais[] = [];
  @Output() onEmit: EventEmitter<string> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    this.onEmit.emit( termino );
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-paises-resultados',
  templateUrl: './paises-resultados.component.html',
  styles: [
  ]
})
export class PaisesResultadosComponent implements OnInit {
  @Input() paises:Pais[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

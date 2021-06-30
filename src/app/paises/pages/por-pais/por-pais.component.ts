import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];


  constructor( private paisesService: PaisesService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    if( termino.trim().length === 0 ){
      return;
    }
    this.termino = termino;
    this.hayError = false;

    this.paisesService.buscarPais( termino )
      .subscribe( (paises) =>{

        this.paises = paises;
        this.paisesSugeridos = [];
      },(err)=>{

        this.hayError = true;
        this.paises = [];
      })
  }

  sugerencias( termino: any ){
    this.hayError = false;
    this.termino = termino;
    
    this.paisesService.buscarPais( termino )
      .subscribe( paises =>{
        this.paisesSugeridos = paises;
      },(err)=>{
        this.paisesSugeridos = [];
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

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
        
      },(err)=>{

        this.hayError = true;
        this.paises = [];
      })
  }

  sugerencias( event: any ){
    this.hayError = false;
    //TODO: crear sugerencias
    console.log( event ); 
  }
}

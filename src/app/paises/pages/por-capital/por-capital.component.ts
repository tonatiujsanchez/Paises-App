import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];

  constructor( private paisesService: PaisesService  ) { }

  ngOnInit(): void {
  }
  buscar( termino: string ){
    if( termino.trim().length === 0 ){
      return;
    }
    this.termino = termino;
    this.hayError = false;

    this.paisesService.porCapital( termino )
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
    
    this.paisesService.porCapital( termino )
      .subscribe( paises =>{
        this.paisesSugeridos = paises;
      },(err)=>{
        this.paisesSugeridos = [];
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {
  
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = ''
  paises: Pais[] = [];

  constructor( private paisesService: PaisesService ) { }

  ngOnInit(): void {
  }

  getClaseBtn( region:string ): string{
    return region === this.regionActiva ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion( region:string ){
    if( region === this.regionActiva ){return}

    this.regionActiva = region;
    this.paises = [];

    this.paisesService.porRegion( region )
      .subscribe( paises =>{
        this.paises = paises;
        // console.log(this.paises);
      });
  }
}

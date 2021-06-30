import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { switchMap } from "rxjs/operators";
import { Pais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  constructor( private activateRoute: ActivatedRoute,
                private paisesService: PaisesService
                ) { }

  ngOnInit(): void {


    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.paisesService.porCodigo( id ) )
      )
      .subscribe( pais =>{
        this.pais = pais;
      });



    // this.activateRoute.params
    //   .subscribe( ({id}) =>{
    //     console.log(id);

    //     this.paisesService.porCodigo( id )
    //       .subscribe( pais =>{
    //         console.log(pais);
    //       });
    // });

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  private apiURL: string = 'https://restcountries.eu/rest/v2';
  
  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Pais[]>{

    const url:string = `${ this.apiURL }/name/${ termino }`;
    return this.http.get<Pais[]>( url );
            // Otra forma de manejar el error con 'rxjs'
            // .pipe(
            //   catchError( err => of([]))
            // );
  }

  porCapital( termino: string ): Observable<Pais[]>{

    const url:string = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<Pais[]>( url );
  }

  porCodigo( id:string ): Observable<Pais>{
    // https://restcountries.eu/rest/v2/alpha/mex

    const url:string = `${ this.apiURL }/alpha/${ id }`; 
    return this.http.get<Pais>( url );
  }

}

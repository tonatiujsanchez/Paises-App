import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  private apiURL: string = 'https://restcountries.eu/rest/v2';

  get httpParams(){
    return new HttpParams().set( 'fields', 'name;capital;alpha2Code;population;flag' );
  }


  constructor( private http: HttpClient ) { }

  

  buscarPais( termino: string ): Observable<Pais[]>{
    const url:string = `${ this.apiURL }/name/${ termino }`;
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
            // Otra forma de manejar el error con 'rxjs'
            // .pipe(
            //   catchError( err => of([]))
            // );
  }

  porCapital( termino: string ): Observable<Pais[]>{
    const url:string = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  porCodigo( id:string ): Observable<Pais>{
    const url:string = `${ this.apiURL }/alpha/${ id }`; 
    return this.http.get<Pais>( url );
  }

  porRegion( region: string ): Observable<Pais[]>{
    const url:string = `${ this.apiURL }/region/${ region }`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

}

import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  @Input() placeholder: string = 'Por'; 

  @Output() onTermino: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  
  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime( 500 )
    )
    .subscribe( valor=>{
      // console.log('debouncer', valor );
      this.onDebounce.emit( valor );
    })
  }

  
  buscar(){
    this.onTermino.emit( this.termino );
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );    
  }


}

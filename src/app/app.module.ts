import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PaisesModule } from './paises/paises.module';

//Componentes
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PaisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPreguntasComponent } from './components/lista-preguntas/lista-preguntas.component';
import { ListaHistoricoComponent } from './components/lista-historico/lista-historico.component';
import { HomeComponent } from './components/home/home.component';
import { JuegoComponent } from './components/juego/juego.component';
import { CrearPreguntaComponent } from './components/crear-pregunta/crear-pregunta.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ListaPreguntasComponent,
    ListaHistoricoComponent,
    HomeComponent,
    JuegoComponent,
    CrearPreguntaComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    InputTextareaModule,
    CheckboxModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    RadioButtonModule,
    CardModule,
    DialogModule
  ],
  providers: [], schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPreguntaComponent } from './components/crear-pregunta/crear-pregunta.component';
import { HomeComponent } from './components/home/home.component';
import { JuegoComponent } from './components/juego/juego.component';
import { ListaHistoricoComponent } from './components/lista-historico/lista-historico.component';
import { ListaPreguntasComponent } from './components/lista-preguntas/lista-preguntas.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lista-preguntas', component: ListaPreguntasComponent},
  {path: 'lista-historico', component: ListaHistoricoComponent},
  {path: 'crear-pregunta', component: CrearPreguntaComponent},
  {path: 'jugar', component: JuegoComponent},
  {path: 'historial', component: ListaHistoricoComponent},
  {path: '**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

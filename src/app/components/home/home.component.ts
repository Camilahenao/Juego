import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public displayModal = false;
  public jugadores = new Array<Jugador>();
  public selectedJugador: Jugador;
  public nombre: string;
  constructor(private jugadorService: JugadorService,private router: Router,) { }

  ngOnInit(): void {
  }
  showModalDialog() {
    this.jugadorService.getJugadores().subscribe(
      (jugadores) => {
        this.jugadores = jugadores;
      }
    );
    this.displayModal = true;
  }
  guardar() {
    let jugador = new Jugador();
    jugador.nombre = this.nombre;
    this.jugadorService.postJugador(jugador).subscribe(
      (jugador) => {
        this.jugadores.push(jugador);
      }
    );
  }
  continuar(){
    this.router.navigate(['/jugar',this.selectedJugador])
  }
}

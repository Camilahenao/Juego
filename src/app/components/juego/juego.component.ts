import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { HistorialJuego } from 'src/app/models/historial-juego';
import { Jugador } from 'src/app/models/jugador';
import { Opcion } from 'src/app/models/opcion';
import { HistorialJuegoService } from 'src/app/services/historial-juego.service';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  public jugador = new Jugador();
  public acumulado = 0;
  public nivel = 1;
  public categoria = '';
  public categotiaAnterior: Categoria;
  public historial = new HistorialJuego();
  public opciones = new Array<Opcion>();
  public correcto = '';
  public pregunta: string;
  public premio = 0;
  constructor(private route: ActivatedRoute,
    private historialJuegoService: HistorialJuegoService,
    private preguntaService: PreguntaService,
    private router: Router) { }

  ngOnInit(): void {
    this.jugador.id = Number(this.route.snapshot.paramMap.get('id'));
    this.jugador.nombre = this.route.snapshot.paramMap.get('nombre');
    this.historialJuegoService.getJugadoresByIdJugador(this.jugador.id).subscribe(
      (historial) => {
        if (historial != null) {
          this.historial = historial;
          this.acumulado = Number(historial.acumulado);
          this.nivel = historial.categoria.ronda.nivel + 1;
          this.categoria = historial.categoria.nombre;
          this.categotiaAnterior = historial.categoria;
        }
        this.obtenerPregunta();
      }
    );
  }
  salir() {
    this.historial.jugador = this.jugador;
    this.historial.acumulado = this.acumulado;
    this.historial.categoria = this.categotiaAnterior;
    this.historial.id = 0;
    this.historialJuegoService.postHistorial(this.historial).subscribe(
      (res) => {
        console.log(res);
      }
    );
    this.router.navigate(['/home']);
  }
  continuar() {
    let correcta = this.opciones.filter(x => x.correcta);
    if (correcta[0].id == Number(this.correcto)) {
      if (this.nivel + 1 < 6) {
        this.nivel += 1;
        this.acumulado += Number(this.opciones[0].pregunta.categoria.ronda.ronda.dinero);
        this.categotiaAnterior = this.opciones[0].pregunta.categoria;
        this.obtenerPregunta();
      }else{
        alert("Ganasteee")
        this.salir()
      }
    } else {
      alert("Perdiste")
    }

  }
  obtenerPregunta() {
    this.preguntaService.getPregunta(this.nivel).subscribe(
      (opciones) => {
        this.opciones = opciones;
        if (this.opciones.length > 0) {
          this.pregunta = this.opciones[0].pregunta.contenido;
          this.categoria = this.opciones[0].pregunta.categoria.nombre;
          this.premio = this.opciones[0].pregunta.categoria.ronda.ronda.dinero;
        }
      }
    );
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HistorialJuego } from 'src/app/models/historial-juego';
import { HistorialJuegoService } from 'src/app/services/historial-juego.service';

@Component({
  selector: 'app-lista-historico',
  templateUrl: './lista-historico.component.html',
  styleUrls: ['./lista-historico.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListaHistoricoComponent implements OnInit {
  public historial = new Array<HistorialJuego>();
  public colsHistorial = [
    { header: 'Nombre', field: 'jugador' },
    { header: 'Ronda', field: 'categoria' },
    { header: 'Puntaje', field: 'acumulado' },
  ];
  constructor(private historialService: HistorialJuegoService) { }

  ngOnInit(): void {
    this.historialService.getHistorial().subscribe(
      (historial) => {
        this.historial = historial;
      }
    );
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.component.html',
  styleUrls: ['./lista-preguntas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListaPreguntasComponent implements OnInit {
  public preguntas = new Array<Pregunta>();
  constructor(private preguntaService: PreguntaService) { }
  public colsPregunta = [
    { header: 'Pregunta', field: 'contenido' },
    { header: 'Categoria', field: 'categoria' }
  ];

  ngOnInit(): void {
    this.preguntaService.getPreguntas().subscribe(
      (preguntas) => {
        this.preguntas = preguntas;
      }
    );
  }

}

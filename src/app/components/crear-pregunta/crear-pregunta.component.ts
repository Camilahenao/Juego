import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['./crear-pregunta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CrearPreguntaComponent implements OnInit {
  public categorias = new Array<Categoria>();
  public selectedCategoria: Categoria;
  public pregunta: string;
  public opcionUno: string;
  public opcionDos: string;
  public opcionTres: string;
  public opcionCuatro: string;
  public correcto = '';

  constructor(private categoriaService: CategoriaService, private preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (categorias) => {
        this.categorias = categorias;
      }
    );
  }
  public guardar() {
    var pregun = {
      idCategoria: this.selectedCategoria.id,
      pregunta: this.pregunta,
      opcionUno: this.opcionUno,
      opcionDos: this.opcionDos,
      opcionTres: this.opcionTres,
      opcionCuatro: this.opcionCuatro,
      opcionUnoCorrecta: this.correcto == '1' ? true : false,
      opcionDosCorrecta: this.correcto == '2' ? true : false,
      opcionTresCorrecta: this.correcto == '3' ? true : false,
      opcionCuatroCorrecta: this.correcto == '4' ? true : false,
    }
    this.preguntaService.postPreguntas(pregun).subscribe(
      (res) => {
        console.log("pregunta Guardada")
      }
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta';
import { Opcion } from '../models/opcion';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private url = '/juego';
  constructor(private http: HttpClient) { 
    this.url = environment.ApiEndPoint + this.url;
  }

  public getPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.url.concat('/preguntas'));
  }
  public getPregunta(nivel: number): Observable<Opcion[]> {
    return this.http.get<Opcion[]>(this.url.concat(`/pregunta/${nivel}`));
  }
  public postPreguntas(pregunta: any) {
    let httpHeaders =  new HttpHeaders({ 'Content-Type': 'application/json' });
    httpHeaders.get('Authorization');
    httpHeaders.get('Content-Type');
    return this.http.post(this.url.concat('/agregarPregunta'), pregunta, { headers: httpHeaders });
  }
}

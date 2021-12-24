import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private url = '/juego';
  constructor(private http: HttpClient) { 
    this.url = environment.ApiEndPoint + this.url;
  }

  public getJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.url.concat('/jugadores'));
  }
  public postJugador(jugador: any):Observable<Jugador> {
    let httpHeaders =  new HttpHeaders({ 'Content-Type': 'application/json' });
    httpHeaders.get('Authorization');
    httpHeaders.get('Content-Type');
    return this.http.post<Jugador>(this.url.concat('/agregarJugador'), jugador, { headers: httpHeaders });
  }
}

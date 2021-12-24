import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HistorialJuego } from '../models/historial-juego';

@Injectable({
  providedIn: 'root'
})
export class HistorialJuegoService {

  private url = '/juego';
  constructor(private http: HttpClient) { 
    this.url = environment.ApiEndPoint + this.url;
  }

  public getJugadores(): Observable<HistorialJuego[]> {
    return this.http.get<HistorialJuego[]>(this.url.concat('/jugadores'));
  }
  public getHistorial(): Observable<HistorialJuego[]> {
    return this.http.get<HistorialJuego[]>(this.url.concat('/historialJuego'));
  }
  public getJugadoresByIdJugador(idJugador: number): Observable<HistorialJuego> {
    return this.http.get<HistorialJuego>(this.url.concat(`/historialJuego/${idJugador}`));
  }
  public postJugador(jugador: any):Observable<HistorialJuego> {
    let httpHeaders =  new HttpHeaders({ 'Content-Type': 'application/json' });
    httpHeaders.get('Authorization');
    httpHeaders.get('Content-Type');
    return this.http.post<HistorialJuego>(this.url.concat('/agregarJugador'), jugador, { headers: httpHeaders });
  }
  public postHistorial(historial: any):Observable<any> {
    let httpHeaders =  new HttpHeaders({ 'Content-Type': 'application/json' });
    httpHeaders.get('Authorization');
    httpHeaders.get('Content-Type');
    return this.http.post<any>(this.url.concat('/agregarHistorialJuego'), historial, { headers: httpHeaders });
  }
}

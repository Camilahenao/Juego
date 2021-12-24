import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = '/juego';
  constructor(private http: HttpClient) { 
    this.url = environment.ApiEndPoint + this.url;
  }

  public getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url.concat('/categorias'));
  }
}

import { Categoria } from "./categoria";
import { Jugador } from "./jugador";

export class HistorialJuego {
    id: number;
    acumulado: number;
    jugador = new Jugador();
    categoria = new Categoria();
}
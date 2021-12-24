import { Ronda } from "./ronda";

export class Categoria {
    id: number;
    nombre: string;
    ronda = new Ronda();
}
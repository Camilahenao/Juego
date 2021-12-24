import { Categoria } from "./categoria";

export class Pregunta {
    id: number;
    contenido: string;
    categoria = new Categoria();
}
import { Pregunta } from "./pregunta";

export class Opcion {
    id: number;
    contenido: string;
    correcta: boolean;
    pregunta = new Pregunta();
}
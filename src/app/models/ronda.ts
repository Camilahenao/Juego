import { Premio } from "./premio";

export class Ronda {
    id: number;
    nivel: number;
    premio = new Premio();
    ronda: any;
}
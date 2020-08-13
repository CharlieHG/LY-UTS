import { Jugador } from "./jugador";

export interface UltimaPartida{
    clavePartida: number,
    jGanador: Jugador,
    tiempo: number,
    chorro: number,
    centro: number,
    esq4: number,
    buena: number
}
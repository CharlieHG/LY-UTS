import { Carta } from "./carta";

export interface Jugador{
    clavePartida:number;
    idJugador:number;
    nombre:string;
    puntos:number;
    rol:number;
    cartaGrande:number;
}
import { Jugador } from "./jugador";
import { Jugadas } from "./jugadas";
export interface Partida{
    clave:number;
    jugadores:Array<Jugador>;
    confirm:boolean;
    confirmStop:boolean;
    totalJugadores:number;
    barajas:Array<number>;
    jugadas:Array<Jugadas>;
}
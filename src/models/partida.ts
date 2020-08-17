import { Jugador } from "./jugador";
export interface Partida{
    clave:number;
    jugadores:Array<Jugador>;
    confirm:boolean,
    barajas:Array<string>
}
import { Maquina } from "./Maquina";

export abstract class Sala implements Maquina{
    abstract MontoMinimo: number;
    
    abstract Tirar(apuesta:number): number;

    public getMontoMinimo(): number{
        return this.MontoMinimo;
    };
}
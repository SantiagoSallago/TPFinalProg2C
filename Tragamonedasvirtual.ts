import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasVirtual extends Tragamonedas {
// extiende la clase Tragamonedas. Esto significa que TragamonedasVirtual hereda todos los métodos y propiedades 
// de la clase base, como Girar() y Simbolos.

    constructor(){
       super();
       this.Bono = 1.5;
       this.multiplicador = 1.5;

    }

    Retirar(): void {
        console.log("Retirar");
    }

 
}
   
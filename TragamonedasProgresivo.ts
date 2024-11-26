import { Tragamonedas } from "./Tragamonedas"

export class TragamonedasProgresivo extends Tragamonedas {


    constructor() {
        super();  // Llama al constructor de la clase base
        this.Bono = 1.20;
        this.multiplicador = 1;
    }


     // Sobrescribir el método 'Tirar' si se desea comportamiento diferente
     public Tirar(apuesta:number): number {
        console.log("Girando el Tragamonedas Progresivo");
        // Llamar al método Tirar de la clase base
        return super['Tirar'](apuesta);
    }

    
    public ActivarBonificacion(): void {
        console.log("¡Bonificación activada!");
    }

  
    
}

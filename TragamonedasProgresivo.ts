import { Tragamonedas } from "./Tragamonedas"

export class TragamonedasProgresivo extends Tragamonedas {

    constructor() {
        super();  // Llama al constructor de la clase base
        
    }

     // Sobrescribir el método 'Tirar' si se desea comportamiento diferente
     public Tirar(): void {
        console.log("Girando el Tragamonedas Progresivo");
        // Llamar al método Tirar de la clase base
        super.Girar();
    }

public Apostar(): void {
    console.log("Apuesta Minima de: $500");
}
    
    public ActivarBonificacion(): void {
        console.log("¡Bonificación activada!");
    }

    public verificarPremio(): void {
        console.log("Verificación de premios");
        // Llamar al método de la clase base si es necesario
        super['VerificarPremio']();  // Accediendo al método privado de la clase base
    }



    
}
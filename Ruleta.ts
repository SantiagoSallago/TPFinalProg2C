import { Sala } from "./Sala";

export class Ruleta extends Sala {
    MontoMinimo = 1000;
    multiplicador = 1.5;
    private numeros:{numero:number,color:string}[];



    constructor(){
        super(); 
        this.numeros=[
            { numero: 0, color: '🍀 Verde' },
            { numero: 32, color: '🔴 Rojo' },
            { numero: 15, color: '⚫ Negro' },
            { numero: 19, color: '🔴 Rojo' },
            { numero: 4, color: '⚫ Negro' },
            { numero: 21, color: '🔴 Rojo' },
            { numero: 2, color: '⚫ Negro' },
            { numero: 25, color: '🔴 Rojo' },
            { numero: 17, color: '⚫ Negro' },
            { numero: 34, color: '🔴 Rojo' },
            { numero: 6, color: '⚫ Negro' },
            { numero: 27, color: '🔴 Rojo' },
            { numero: 13, color: '⚫ Negro' },
            { numero: 36, color: '🔴 Rojo' },
            { numero: 11, color: '⚫ Negro'},
            { numero: 30, color: '🔴 Rojo'},
            { numero: 8, color: '⚫ Negro'},
            { numero: 23, color: '🔴 Rojo'},
            { numero: 10, color: '⚫ Negro'},
            { numero: 5, color: '🔴 Rojo' },
            { numero: 24, color: '⚫ Negro'},
            { numero: 16, color: '🔴 Rojo'},
            { numero: 33, color: '⚫ Negro'},
            { numero: 1, color: '🔴 Rojo' },
            { numero: 20, color: '⚫ Negro' },
            { numero: 14, color: '🔴 Rojo' },
            { numero: 31, color: '⚫ Negro' },
            { numero: 9, color: '🔴 Rojo' },
            { numero: 22, color: '⚫ Negro' },
            { numero: 18, color: '🔴 Rojo' },
            { numero: 29, color: '⚫ Negro' },
            { numero: 7, color: '🔴 Rojo' },
            { numero: 28, color: '⚫ Negro' },
            { numero: 12, color: '🔴 Rojo' },
            { numero: 35, color: '⚫ Negro' },
            { numero: 3, color: '🔴 Rojo' },
            { numero: 26, color: '⚫ Negro' },

           ];
    }

    getColor(numero:number): string{
        let resultado:string="";

        this.numeros.map(e => {
            if (e.numero === numero) {
                resultado = e.color;
            } 
        });

        
        
        return resultado
    }
    

    // Función para verificar si el número por el cual se apostó es el correcto
    verificarPremio(numero : number, apuesta : number, resultadoRuleta : number) : number {
        let ganancia : number;
            if (numero === resultadoRuleta) {
                console.log(`¡Premio!`);
                
                ganancia = apuesta * this.multiplicador;
            } else {
                console.log("Perdiste. No hay premio.");
                ganancia = 0
            }
        return ganancia;
    }

    Tirar():number {
       let indiceAleatorio = Math.floor(Math.random()*this.numeros.length);
       console.log(`Ha salido el numero ${indiceAleatorio} (${this.getColor(indiceAleatorio)})`);
       return indiceAleatorio;
    }
}
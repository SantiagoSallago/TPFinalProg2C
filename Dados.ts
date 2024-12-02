import { Sala } from "./Sala";

export class Dados{
    private caras:number;

    constructor(){
        this.caras=6;
    }

    Tirar():number{
        return Math.floor(Math.random()*this.caras) +1;
    }
}

export class TresDados extends Sala{
    MontoMinimo = 500;
    private Dado:Dados;
    

    constructor(){
        super();
        this.Dado=new Dados();
        
    }
    
    Tirar(apuesta:number): number{
        let resultado:number[]=[];
        resultado.push(this.Dado.Tirar())
        resultado.push(this.Dado.Tirar())
        resultado.push(this.Dado.Tirar())
        

        console.log("resultado de los dado 🎲:")
        console.table(resultado)
        
        let suma:number=0 // <--- Almacenar la suma de los valores que salgan en los dados

        resultado.forEach(element => {        
           suma += element // <----  Cada vuelta  se suma el valor del dado en esa posicion.
        });
        
        console.log(`La suma de todos los resultados es de: ${suma} `)

        // si la suma de los dados es Mayor o igual a 12, que es 2/3 de los 18 (maximo valor) se gana
        if (suma >= 12){
            console.log("Ganaste 💰")
            return apuesta * 2;
        }
        else{
            console.log("Perdio la apuesta ( 😥 )")
            return 0;
        }

       
    }
   
}


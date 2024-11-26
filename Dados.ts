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
    
    Tirar(): number{
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
        return suma;
    }
   
}


export class Dados {
    private caras:number;

    constructor(caras:number=6){
        this.caras=caras;
    }

    tirar():number{

        return Math.floor(Math.random()*this.caras) +1;
    }
}

export class TresDados{
    private Dado:Dados;
    

    constructor(){
        this.Dado=new Dados();
        
    }
    
    tirarYsumar():void{
        let resultado:number[]=[];
        resultado.push(this.Dado.tirar())
        resultado.push(this.Dado.tirar())
        resultado.push(this.Dado.tirar())
        

        console.log("resultado de los dado 🎲:")
        console.table(resultado)
        
        let suma:number=0 // <--- Almacenar la suma de los valores que salgan en los dados

        resultado.forEach(element => {        
           suma += element // <----  Cada vuelta  se suma el valor del dado en esa posicion.
        });
        
        console.log(`La suma de todos los resultados es de: ${suma} `)
       
    }

}


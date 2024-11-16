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
    private dado1:Dados;
    private dado2:Dados;
    private dado3:Dados;

    constructor(){
        this.dado1=new Dados();
        this.dado2=new Dados();
        this.dado3=new Dados();
    }

    tirarYsumar():void{
        const resultado1=this.dado1.tirar()
        const resultado2=this.dado2.tirar()
        const resultado3=this.dado3.tirar()


        console.log(`resultado del dado 1: ${resultado1}`)
        console.log(`resultado del dado 2: ${resultado2}`)
        console.log(`resultado del dado 3: ${resultado3}`)

        return console.log(`El resultado de los Dados 🎲 : `,resultado1+ resultado2+ resultado3);
         
    }

}


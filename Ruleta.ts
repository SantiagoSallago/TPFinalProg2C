export class Ruleta {;
    private numeros:{numero:number,color:string}[];



    constructor(){
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
            { numero: 36, color: '⚫ Negro' },
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

    girar():void {
        const indiceAleatorio=Math.floor(Math.random()*this.numeros.length);

        const resultado=this.numeros[indiceAleatorio];
        
        console.log(`Ha salido el numero ${resultado.numero} (${resultado.color})`);
    }
}
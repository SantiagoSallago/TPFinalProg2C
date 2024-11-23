import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasVirtual extends Tragamonedas {
// extiende la clase Tragamonedas. Esto significa que TragamonedasVirtual hereda todos los métodos y propiedades 
// de la clase base, como Girar() y Simbolos.
    private bono:boolean;
// Un booleano que indica si el bono está activado. Si está activado, el premio se multiplica.
    private multiplicador:number;  
// determina cuántas veces se multiplicarán las ganancias si el premio es ganado.

    constructor(multiplicador:number, bono:boolean=false){
       super();
       this.multiplicador=multiplicador;
       this.bono=bono;

    }

    private verificarpremio():void{
        super["VerificarPremio"]()

        if(this.bono){
            console.log(`Bono activado! Multiplicamos tu premio por ${this.multiplicador}`)
        }
    }

    public Bono(activar:boolean):void{
        this.bono=activar;
        console.log(activar? "¡Bono activado!":"¡Bono desactivado!");
    }

    public EstrablecerMultiplicador(multiplcador:number):void{
        this.multiplicador=this.multiplicador;
        console.log(`Multiplicador establecido a ${multiplcador}`)
    }


    Apostar(): void {
        
        console.log("Apuesta Minima de: $500");
    }
    Retirar(): void {
        console.log("Retirar");
    }
    Tirar(): void {
        console.log("Haciendo la tirada del  tragamonedas"); 
        this.Girar();
        
    }
}
   


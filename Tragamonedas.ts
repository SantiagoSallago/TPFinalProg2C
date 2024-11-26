import { Sala } from "./Sala";


// La clase Tragamonedas está siendo exportada, lo que significa que puede ser importada y utilizada en
//  otros archivos
export abstract class Tragamonedas extends Sala {
    protected Bono:number = 1;
    MontoMinimo = 500;
    protected multiplicador:number = 0.5;
    protected columnas:number = 5;
    protected filas:number = 5;

    public Rodillos: string[][] = [
        ['', '', '', '', '' ],
        ['', '', '', '', '' ],
        ['', '', '', '', '' ],
        ['', '', '', '', '' ],
        ['', '', '', '', '' ]
    ];


    // Simbolos es una matriz que contiene tres filas, cada una con una serie de símbolos
    public Simbolos: string[] = ['🍒', '🍊', '🍋', '🍉', '🍇']
        
    // Método para simular el giro de los rodillos
    public Girar(apuesta:number): number {
     // Simular el giro eligiendo un número aleatorio por cada "rodillo" de la matriz

     for (let i = 0; i < this.filas; i++) {
         for (let j = 0; j < this.columnas; j++) {
            //Asignar un símbolo aleatorio de la lista de símbolos
             let randomIndex = Math.floor(Math.random() * this.Simbolos.length);
             this.Rodillos[i][j] = this.Simbolos[randomIndex]; 
         }
     }

        // Mostrar la matriz de símbolos después del giro
        console.log(this.Rodillos)

        // Verificar si hay una combinación ganadora
        let resultado:number =this.VerificarPremio(apuesta, this.Bono);

        if (resultado !== 0)
            console.log(`El resultado de la tirada es de: ${resultado}`);
        
        return resultado;
    }

     // Método para verificar si hay una combinación de 3 símbolos consecutivos iguales
     protected VerificarPremio(apuesta:number, bono:number): number {
        let flag:boolean=false;
        let ganancias:number=0;

        // Verificar filas
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas - 2; j++) {
                if (this.Rodillos[i][j] === this.Rodillos[i][j + 1] && this.Rodillos[i][j] === this.Rodillos[i][j + 2]) {
                    console.log(`¡Premio! Tres o más símbolos consecutivos iguales en la fila ${i+1}: ${this.Rodillos[i][j]}`);
                    ganancias += apuesta * this.multiplicador;
                    flag=true;
                }
            }
        }

        //Verificar columnas
        for (let j = 0; j < this.columnas; j++) {
            for (let i = 0; i < this.filas- 2; i++) {
                if (this.Rodillos[i][j] === this.Rodillos[i + 1][j] && this.Rodillos[i][j] === this.Rodillos[i + 2][j]) {
                    console.log(`¡Premio! Tres o más símbolos consecutivos iguales en la columna ${j+1}: ${this.Rodillos[i][j]}`);    
                    ganancias += apuesta * this.multiplicador;
                    flag=true;
                }
            }
        }

        //Si no hay premio, mostrar un mensaje de "No hay premio"
        if (flag === false){
            console.log("No hay premio");
            ganancias = 0;
            return ganancias;
        }else{
            if (bono){
                return ganancias * bono;
            }else{
                return ganancias;
            }
            
        }
    }



    // ------------------------------ Interfaz

    Retirar(): void {
        console.log("Retirar");
    }

    Tirar(apuesta:number): number {
        console.log("Haciendo la tirada del tragamonedas"); 
        return this.Girar(apuesta);
    }
}

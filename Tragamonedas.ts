import { Maquina } from "./Maquina";


// La clase Tragamonedas está siendo exportada, lo que significa que puede ser importada y utilizada en
//  otros archivos
export class Tragamonedas implements Maquina {
    
    public Rodillos: string[]; // me invito un amigo era de chill
    // Simbolos es una matriz (string[][]) que contiene tres filas, cada una con una serie de símbolos
    public Simbolos: string[][] = [
        ['🍒', '🍊', '🍋', '🍉', '🍇'],
        ['🍒', '🍊', '🍋', '🍉', '🍇'],
        ['🍒', '🍊', '🍋', '🍉', '🍇'],
    ]

    
    // Método para simular el giro de los rodillos
    public Girar(): void {
        // Simular el giro eligiendo un número aleatorio por cada "rodillo" de la matriz
        for (let i = 0; i < this.Simbolos.length; i++) {
            for (let j = 0; j < this.Simbolos[i].length; j++) {
                // Asignar un símbolo aleatorio de la lista de símbolos
                let randomIndex = Math.floor(Math.random() * this.Simbolos[i].length);
                this.Simbolos[i][j] = this.Simbolos[i][randomIndex];
            }
        }

        // Mostrar la matriz de símbolos después del giro
        console.log(this.Simbolos);

        // Verificar si hay una combinación ganadora
        this.VerificarPremio();
    }

    // Método para verificar si hay una combinación de 3 símbolos consecutivos iguales
    private VerificarPremio(): void {
        // Verificar filas
        for (let i = 0; i < this.Simbolos.length; i++) {
            for (let j = 0; j < this.Simbolos[i].length - 2; j++) {
                if (this.Simbolos[i][j] === this.Simbolos[i][j + 1] && this.Simbolos[i][j] === this.Simbolos[i][j + 2]) {
                    console.log(`¡Premio! Tres símbolos consecutivos iguales en la fila ${i}: ${this.Simbolos[i][j]}`);
                    return; // Salir si encontramos un premio
                }
            }
        }

        // Verificar columnas
        for (let j = 0; j < this.Simbolos[0].length; j++) {
            for (let i = 0; i < this.Simbolos.length - 2; i++) {
                if (this.Simbolos[i][j] === this.Simbolos[i + 1][j] && this.Simbolos[i][j] === this.Simbolos[i + 2][j]) {
                    console.log(`¡Premio! Tres símbolos consecutivos iguales en la columna ${j}: ${this.Simbolos[i][j]}`);
                    return; // Salir si encontramos un premio
                }
            }
        }
        // Si no hay premio, mostrar un mensaje de "No hay premio"
        console.log("No hay premio");
    }



    
    Apostar(): void {
        
        console.log("Apuesta Minima de: $500");
    }
    Retirar(): void {
        console.log("Retirar");
    }
    Tirar(): void {
        console.log("Efectuando la tirada del dispositivo llamado tragamonedas mi estimado/a..."); 
        this.Girar();
        
    }
}

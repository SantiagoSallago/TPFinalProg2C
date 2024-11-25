import * as readlineSync from 'readline-sync';
import { Tragamonedas } from './Tragamonedas';
import { Dados, TresDados } from './Dados';
import { Ruleta } from './Ruleta';
import { TragamonedasVirtual } from './Tragamonedasvirtual';
import { TragamonedasProgresivo } from './TragamonedasProgresivo';

function main() {
    console.log("Bienvenido al casino virtual 'DEJANOS TU PLATA'")
    
    let Saldo = readlineSync.questionInt('Monto a depositar: ');
    let opcion: number;
    let continuar : boolean = true
    while (continuar) {
        console.log
        (`
            Elija que quiere hacer:
            1. Elegir Juego
            2. Verificar Monto
            3. Agregar Saldo
            
            4. Salir
            `);
            opcion = readlineSync.questionInt()
            switch (opcion) {
                case 1:
                    Juego(Saldo);     
                    break;
                    case 2:
                        console.log(`Su saldo es de $${Saldo}.`)
                        break;
                        case 3:
                            let monto = readlineSync.questionInt(`Cuanto dinero quiere agregar? `)
                            if (monto > 0) {
                                console.log("Saldo agregado exitosamente.")
                                Saldo += monto
                            }
                            break;
                            case 4:
                                console.log("Saliendo del programa, muchas gracias por visitar el casino!")
                                continuar = false;
                break;
            }
        }
    }
    
    
    function Juego(Saldo):number {
        let tragamonedasRodillos = new Tragamonedas();
        let tragamonedasProgresivo = new TragamonedasProgresivo();
        let tragamonedasVirtual = new TragamonedasVirtual(3);
        let TresDados1 = new TresDados();
        let flag: boolean = true;
        while(flag == true){
            console.log()
        console.log("Que desea hacer?")
        console.log("| 1: Tragamonedas | 2: Dados | 3: Ruleta |")
        console.log(" - Para salir ingrese otro numero -")
        let menu = parseInt(readlineSync.question())
        
        switch(menu){
            case 1: console.log(" |                     Tragamoneda                        | ")
                console.log(`
                    1.Tragamonedas de Rodillo
                    2.Tragamonedas Virtual 4k
                    3.Tragamonedas Progresivo
                    4.Salir
                    `);
                    menu = readlineSync.questionInt("A que tragamonedas desea jugar? ")
                
                    switch (menu) {
                        case 1:
                            Tragamoneda(Saldo, tragamonedasRodillos);
                            break;
                        case 2:
                            Tragamoneda(Saldo, tragamonedasVirtual);
                            break;
                        case 3:
                            Tragamoneda(Saldo, tragamonedasProgresivo);
                            break;
                        case 4:
                            console.log('Saliendo del Tragamonedas');
                            break;

                    }
                    break;
            case 2: console.log(" |                     Dados                     | ")
                    // Dados(Saldo, TresDados1);
                    TresDados1.tirarYsumar();
                    break;

            case 3: console.log(" |                     Ruleta                     | ")
                    let ruleta = new Ruleta();
                    ruleta.girar();
                    break;

            default: console.log("Gracias por utilizar el casino!")
                     flag = false;
                     break;
        }
    }
    return Saldo;
}

function Tragamoneda(Saldo:number, clase:Tragamonedas) : number{
    let continuar : boolean = true
    while (continuar) {
        console.log(`
            1. Ver Monto Minimo de Apuesta
            2. Girar
            3. Salir
            `);
        let menu = readlineSync.questionInt('Proceda: ')
        switch(menu){
            case 1:
                clase.Apostar();
                break;
                case 2:
                    let apuesta = readlineSync.questionInt('Cuanto desea apostar? ')
                    if (apuesta >= 500) {
                        Saldo -= apuesta;
                        clase.Tirar();
                        console.log('Su saldo es de: '+ Saldo);
                    } else {
                        console.log('Ingrese una apuesta mayor o igual a $500');
                    }
                    break;
                case 3:
                    console.log('Saliendo del tragamonedas...')
                    continuar = false
                    break;
                default:
                    console.log("Opción invalida.");
                    break;
                }
            }
        return Saldo;
    }
        
// function Dados(Saldo:number, clase:Dados) : number{
    
// }

main();
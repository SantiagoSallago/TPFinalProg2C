import * as readlineSync from 'readline-sync';
import { Sala } from './Sala';
import { TresDados } from './Dados';
import { Ruleta } from './Ruleta';
import { TragamonedasVirtual } from './Tragamonedasvirtual';
import { TragamonedasProgresivo } from './TragamonedasProgresivo';

function main() {
    console.log("Bienvenido al casino virtual!")
    let Saldo:number = 0;

    while (Saldo < 1000){
        Saldo = readlineSync.questionInt('Monto a depositar (+1000): ');
    }
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
                    let monto = readlineSync.questionInt(`Cuanto dinero quiere agregar? (+1000): `)
                    if (monto > 1000) {
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
        
        let tragamonedasProgresivo = new TragamonedasProgresivo();
        let tragamonedasVirtual = new TragamonedasVirtual();
        let TresDados1 = new TresDados();
        let ruleta = new Ruleta();

        let flag: boolean = true;
        while(flag == true){
            console.log()
        console.log("Que desea hacer?")
        console.log("| 1: Tragamonedas | 2: Dados | 3: Ruleta |")
        console.log(" - Para salir ingrese otro numero -")
        let menu = parseInt(readlineSync.question())
        
        switch(menu){
            case 1: 
                console.log(" |                     Tragamoneda                        | ")
                console.log(`
                    1.Tragamonedas Virtual 4k
                    2.Tragamonedas Progresivo
                    3.Salir
                    `);
                menu = parseInt(readlineSync.question("A que tragamonedas desea jugar? "))
            
                switch (menu) {
                    case 1:
                        juegoCasino(Saldo, tragamonedasVirtual);
                        break;
                    case 2:
                        juegoCasino(Saldo, tragamonedasProgresivo);
                        break;
                    case 3:
                        console.log('Saliendo del Tragamonedas');
                        break;
                }
                break;
            case 2: 
                console.log(" |                     Dados                     | ")
                juegoCasino(Saldo, TresDados1);
                break;

            case 3: 
                console.log(" |                     Ruleta                     | ")     
                console.log();
                let continuar = true
                while (continuar) {
                    let numeroRuleta = readlineSync.questionInt("Por cual numero desea apostar? (0-36): " )
                    if (numeroRuleta <0 || numeroRuleta > 36){
                        console.log("Ingrese un numero valido");
                        break
                    }
                    
                    let apuestaRuleta = readlineSync.questionInt("Cuanto dinero quiere apostar? ")
                    if (apuestaRuleta <= ruleta.getMontoMinimo()){
                        console.log("Ingrese un monto mayor o igual a "+ ruleta.getMontoMinimo());
                        break
                    }
                          
                    if (numeroRuleta >= 0 && numeroRuleta <= 36 && apuestaRuleta >= ruleta.getMontoMinimo()) {
                        //-------- Resto apuesta y tiro la ruleta
                        Saldo -= apuestaRuleta;
                        let resultado = ruleta.Tirar();

                        // ---------- verifico resultado
                        Saldo += ruleta.verificarPremio(numeroRuleta, apuestaRuleta, resultado)
                        console.log("Saldo actual: " + Saldo);
                    }

                    let opcionRuleta : string;
                    while (opcionRuleta !== undefined) {
                        opcionRuleta = readlineSync.question('Desea continuar? ')
                        if (opcionRuleta.toLowerCase() == "si") {
                            continuar = true
                            break;
                        } else {
                            console.log("Gracias por jugar!");
                            continuar = false;
                            break;
                        }
                    }                        
                }
                console.log()
                break;

            default: 
                console.log("Gracias por utilizar el casino!")
                flag = false;
                break;
        }
    }
    return Saldo;
}
// Se crea una funcion a a la cual se le pasa por parametro el Saldo de la persona y la clase(Juego seleccionado)
function juegoCasino(Saldo:number, clase: Sala) : number{
    let continuar : boolean = true

    //  while para iterar
    while (continuar) {
        console.log(`
            1. Ver Monto Minimo de Apuesta
            2. Girar
            3. Salir
            `);
        let menu = readlineSync.questionInt('Proceda: ')

        switch(menu){
            case 1:
                console.log(`El monto minimo de apuesta es de: $${clase.getMontoMinimo()}`);
                break;
            case 2:
                let apuesta = readlineSync.questionInt('Cuanto desea apostar? ')
                if (apuesta >= clase.getMontoMinimo()) {
                    Saldo -= apuesta;
                    Saldo += clase.Tirar(apuesta); //--- se suma el resultado de la apuesta
                    console.log(Saldo);
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
        

main();
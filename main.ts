import { Persona } from "./Persona";
import { Ruleta } from "./Ruleta";
// import { tragamonedas } from "./Tragamonedas";
import * as readlineSync from 'readline-sync';
import { Tragamonedas } from "./Tragamonedas";
import { Dados, TresDados } from "./Dados";

// Se le pregunta al usuario su nombre y este llena los campos de la clase persona
console.log("¿Cual es tu nombre?");
const nombre = readlineSync.question('Nombre: ');
const apellido = readlineSync.question('Apellido: ');
let persona = new Persona(nombre, apellido);
// Se muestra el nombre completo de la persona
persona.MostrarNombreCompleto();



let cucahau = new Tragamonedas();
cucahau.Girar();

let dados = new TresDados();
dados.tirarYsumar();

let ruleta = new Ruleta();
ruleta.girar();

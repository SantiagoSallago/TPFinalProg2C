export class Persona {
    private Nombre: string;
    private Apellido: string;
    

    constructor(nombre: string, apellido: string){
        this.Nombre = nombre;
        this.Apellido = apellido;
        console.log(this.Nombre + " " + this.Apellido);
    }

    MostrarNombreCompleto(): string {
        return `${this.Nombre} ${this.Apellido}`;
    }
}

   



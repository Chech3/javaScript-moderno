

class Persona {
    nombre;
    apellido;
    edad;
    constructor(nombre = "Sin nombre", apellido = "Sin apellido", edad = "Sin edad") {
        // if (nombre === undefined) throw new Error("Falta el nombre");
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    quienSoy() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }

    soloMiNombre() {
        this.quienSoy();
        console.log(`Mi nombre es ${this.nombre}`);
    }
}


const SpiderMan = new Persona("Peter", "Parker", 19);
const ironMan = new Persona("Tony", "Stark", 40);
(SpiderMan.soloMiNombre());


class Persona {
    static conteo = 0;
    static get getConteo() {
        return Persona.conteo;
    }
    static saludo() {
        console.log(this.mensaje)
        console.log("Hola a todos");
    }
    constructor(nombre = "Sin nombre", apellido = "Sin apellido", edad = "Sin edad") {
        // if (nombre === undefined) throw new Error("Falta el nombre");
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        Persona.conteo++;
    }

    set setComidaFavorita(comida) {
        this.comidaFavorita = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comidaFavorita}`;
    }

    quienSoy() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }

    soloMiNombre() {
        this.quienSoy();
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

class Heroe extends Persona {
    clan = "Sin clan";

    constructor (nombre,apellido,edad) {
        super(nombre,apellido,edad);
        this.clan = "Los avengers";
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} ${this.apellido} y soy de ${this.clan}`);
        super.quienSoy();
    }
}

const batman = new Heroe("Bruce", "Wayne", 30);

batman.quienSoy();
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


const SpiderMan = new Persona("Peter", "Parker", 19);
const IronMan = new Persona("Peter", "Parker", 19);


SpiderMan.setComidaFavorita = "Pizza";
SpiderMan.setComidaFavorita = "Duende verde"
console.log(SpiderMan.getComidaFavorita)
console.log(SpiderMan)

console.log(Persona.getConteo)
Persona.saludo();

Persona.propiedadExterna = "Hola mundo";

console.log(Persona)
console.log(Persona.propiedadExterna)
class Singleton {
    static instancia;
    constructor(nombre = "") {
        // const a = undefined;
        // console.log(a) //undefined
        // console.log(!a) //false
        // console.log(!!a) //true

        if (!!Singleton.instancia) return Singleton.instancia;

        Singleton.instancia = this;
        this.nombre = nombre;

        // return this; Esto se hace por defecto
    }
}

const alguien = new Singleton("Jose");
const otraPersona = new Singleton("Isabel");
const alguienMas = new Singleton("Juan");

console.log(`Nombre en la instancia es ${alguien.nombre}`)
console.log(`Nombre en la instancia es ${otraPersona.nombre}`);
console.log(`Nombre en la instancia es ${alguienMas.nombre}`);
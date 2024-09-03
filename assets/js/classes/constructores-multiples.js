class Persona {

    static porObjeto({nombre,apellido,edad}){
        return new Persona(nombre,apellido,edad);
    }
   constructor (nombre,apellido,edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
   } 
   quienSoy() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
   }
}


const dylan = {
    nombre: "Dylan",
    apellido: "Garces",
    edad: 10,
}

const jose = new Persona("Jose", "Garces", 23);

const prueba = Persona.porObjeto(dylan);

console.log(prueba);

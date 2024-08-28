//El this hace referencia a un elemento que está dentro del mismo objeto
//Recordatorio que toda funcion sin return siempre estaria retornando undefined
const jose = {
    nombre: 'Jose',
    apellido: 'Garces',
    edad: 23,
    imprimir(){
        console.log(`${this.nombre} ${this.apellido} ${this.edad} `)
    }
}

const isabel = {
    nombre: 'Isabel',
    apellido: 'Uzcategui',
    edad: 23,
    imprimir(){
        console.log(`${this.nombre} ${this.apellido} ${this.edad} `)
    }
}
// isabel.imprimir()

//El hecho de que Persona este en mayusculas es porque eventualmente sera un constructor
function Persona (nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.imprimir = function(){
        console.log(`${this.nombre} ${this.apellido} ${this.edad} `)
    }
}


const juan = new Persona('Juan', 'Medina', 22)

const angel = new Persona('Angel', 'Añez', 23)

angel.imprimir();


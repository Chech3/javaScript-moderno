const crearPersona = (nombre, apellido) => {
    return { nombre: nombre, apellido: apellido }
}
const crearPersona2 = (nombre, apellido) => {
    return { nombre, apellido }
}//Si el nombre de la propiedad es igual al nombre de la variable, no es necesario poner el nombre de la variable

const crearPersona3 = (nombre, apellido) => ({ nombre, apellido }) //Una forma mas resumida de declararlo


// console.log(crearPersona('Jose', 'Garces'));

function imprimirArgumentos() {
    console.log(arguments);
}
const imprimirArgumentos2 = (...arg) => arg; //Para que funcione debemos usar el parametro rest
//Y despues de el parametro rest no se puede usar otra cosa
imprimirArgumentos('Jose', 'Garces', true, 22);
// const [nombre,apellido,casado,edad] = imprimirArgumentos2('Jose', 'Garces', true, 22);

// console.log({nombre,apellido,casado,edad});

// const {apellido, nombre} = crearPersona3('Jose', 'Garces');
//Puedo darles un nuevo nombre en la destructuracion
const { apellido: nuevoApellido, nombre: nuevoNombre } = crearPersona3('Jose', 'Garces');

console.log(nuevoApellido, nuevoNombre);

const tony = {
    nombre: "Tony Stark",
    codeName: "Iron Man",
    edad: 45,
    vivo: false,
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    
}

const destructurando = ({nombre, codeName, edad = 0, vivo, trajes}) => {
   console.log(nombre); 
   console.log(codeName); 
   console.log(edad);  
   console.log(vivo);  
   console.log(trajes);  
} 

destructurando(tony);

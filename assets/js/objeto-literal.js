const personaje = {
    nombre: "Tony Stark",
    codeName: "Iron Man",
    edad: 45,
    vivo: false,
    coord: {
        lat: -45.45,
        long: -123.45
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    direccion: {
        zip: "12345",
        calle: "Main St"
    },
    'ultima-pelicula': "Infinity War"
}

delete personaje.edad //Esto borra lo que le indique dentro del objeto
console.log(personaje);
personaje.casado = true

//Como el objeto esta en una constante si se permite que sus datos dentro sean mutados
//Lo que no esta permitido es el hecho de reasignar esa constante
// console.log(personaje);
// console.log(personaje.nombre);
// console.log(personaje.coord.lat);
// console.log(personaje.trajes.length);
// console.log(personaje['ultima-pelicula']);


const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);
personaje.dinero = 10000
personaje.direccion.calle = "Maraven XD"

// console.log(personaje);

// const propiedades = Object.getOwnPropertyNames(personaje); //Devuelve un array con las propiedades
// const valores = Object.values(personaje); //Devuelve un array con los valores de las propiedades
// console.log(propiedades, personaje, "hola");

const funcionFlecha = () => {
    console.log("Hola");
}
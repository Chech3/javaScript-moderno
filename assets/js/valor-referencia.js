// let juan = { nombre: "Juan" }

// let ana = {...juan}
// ana.nombre = "Ana"; 

// const cambiarNombre = (...persona) => {
//     persona.nombre = "juan"
//     return persona;
// }

// const nombre = cambiarNombre("Luis")

// console.log({nombre, juan, ana});

const frutas = ["manzana", "banana", "Melon"];
// const otrasFrutas = [...frutas];
console.time("slice");
const otrasFrutas = frutas.slice(); //Esto hace exactamente lo mismo. Devuelve un nuevo array
console.timeEnd("slice");

console.time("spread");
const otrasFrutas2 = [...frutas];
console.timeEnd("spread");

otrasFrutas.push("naranja");
console.table({ frutas, otrasFrutas });
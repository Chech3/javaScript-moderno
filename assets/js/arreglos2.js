let juegos = ['Zelda', 'Mario', 'Counter Strike']
console.log("largo: ", juegos.length)

console.log(juegos[0]);
console.log(juegos.length - 1)

juegos.forEach((elemento, indice, arr) => { console.log(elemento, indice);})

let nuevaLongitud = juegos.push('Super Smash');
console.log(nuevaLongitud, juegos)

//Agrega un elemento al inicio del array
nuevaLongitud = juegos.unshift('Halo');
console.log(nuevaLongitud, juegos);

//Elimina el ultimmo elemento del array
let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos)

//Elimina elementos del array y tambien los puedes reemplazar
let juegosBorrados = juegos.splice(1,2)

console.log(juegosBorrados, juegos);
//Devuelve el indice de lo que se colocó
let searchIndex = juegos.indexOf('Counter Strike') //CaseSensitive 
//La respuesta del -1 es debido a que no se encuentra nada 
console.log(searchIndex);


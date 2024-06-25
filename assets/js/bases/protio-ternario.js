const mayor = (x, y) => (x > y) ? x : y;
const tieneMembresia = (membresia) => (membresia) ? "2 dolares" : "10 dolares";


console.log(mayor(5, 10));
console.log(tieneMembresia(false));

const amigo = false;
const arr = ["Hulk", "iron man", amigo ? "thor" : "captain america", (() => " Nick Fury")(), mayor(20, 10)]
//Funcion anonima autoinvocada (() => " Nick Fury")()

console.log(arr);


let nota = 75;

const grado = (nota >= 95) ? "A+" :
    (nota >= 90) ? "A" :
        (nota >= 85) ? "B+" :
            (nota >= 80) ? "B" :
                (nota >= 75) ? "C+" :
                    (nota >= 70) ? "C" : "F";

console.log(nota,grado);

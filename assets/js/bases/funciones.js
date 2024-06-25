function saludar() {
    console.log("hola mundo");
}

const saludar2 = function() {
    console.log("hola mundo 2");
}

//Este parentesis no es necesario, pero de igual forma es buena practica colocarlo
const saludarFlecha = (nombre) => {
    console.log("hola flecha " + nombre);
}

function saludar3(nombre) {
    console.log("hola mundo " + nombre);
    console.log(arguments);
    return "Algo para imprimir"
}

const suma = (a,b) => a + b; //Recortada mas clean

const getAleatorio = () => Math.random();

console.log(getAleatorio());

console.log(suma(10,10));

saludar();
saludar2();
//Una funcion siempre debe retornar algo, sino retorna undefined
const retornoDefuncion = saludar3("cheche", 43, true, "Mi casita");
console.log(retornoDefuncion);
// saludarFlecha("nsonadoansd");
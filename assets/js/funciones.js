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
}



saludar();
saludar2();
saludar3("cheche", 43, true, "Mi casita");
saludarFlecha("nsonadoansd");
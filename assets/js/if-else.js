let hoy = new Date(); //Fecha completa
let dia = hoy.getDay(); //Devuelve el dia actual 
console.log(hoy);
console.log({dia});

if (dia === 1) {
    console.log("Es Lunes");
} else {
    console.log("No es Lunes");
}

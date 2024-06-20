let hoy = new Date(); //Fecha completa
// let dia = hoy.getDay(); //Devuelve el dia actual 
console.log(hoy);

// if (dia === 1) {
    //     console.log("Es Lunes");
    // } else {
        //     console.log("No es Lunes");
        // }
        
        let dia = 0;
        
        // console.log({dia});
const diasLetras = {
    0: () => {"Domingo", console.log(2+10)},
    1: () => "Lunes",
    2: () => "Martes",
    3: () => "Miercoles",
    4: () => "Jueves",
    5: () => "Viernes",
    6: () => "Sabado"
}

console.log(diasLetras[dia]() || "Dia no valido");
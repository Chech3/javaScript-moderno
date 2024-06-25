// const fecha = new Date();
// const diaHoy = fecha.getDay();

// console.log(diaHoy);

// const diasDeSemana = {
//     0:0,
//     1:1,
//     2:2,
//     3:3,
//     4:4,
//     5:5,
//     6:6,
// };
// console.log(diasDeSemana[diaHoy]);

// if (diasDeSemana[diaHoy] >=1 && diasDeSemana[diaHoy] <= 5  ) {
//     console.log("El restaurante abre a las 9 am");
// } else  {
//     console.log("El restaurante abre a las 11 am");
// }


const dia = 5;
const horaActual = 2;

let horaApertura;
let mensaje;

// if ([0, 6, 5].includes(dia)) { //Esto evalúa los elementos que estan dentro del array y devuelve true
//     horaApertura = 11;
//     console.log(`Es fin de semana, hora de apertura: ${horaApertura}`);
// } else {
//     horaApertura = 9;
//     console.log(`Es dia de semana, hora de apertura: ${horaApertura}`);
// }

horaApertura = ([0,5,6].includes(dia) ? 11 : 9 )

// if (horaActual >= horaApertura) {
//     mensaje = "Esta abierto";
// } else {
//     mensaje = `Esta cerrado, abre a las ${horaApertura} horas`;
// }

mensaje = (horaActual >= horaApertura ? mensaje="Esta abierto" : mensaje=`Esta cerrado, abre a las ${horaApertura} horas`)

console.log({horaApertura, mensaje});


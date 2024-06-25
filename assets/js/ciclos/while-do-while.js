const carros = ['Honda', "Toyota", "Ford"]

let i = 0;
// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }
//undefined, nulll, false los toma por igual

// while (carros[i]) {
//     console.log(carros[i]);
//     i++;
// }

while (carros[i]) {
    if (i === 1) {
        break;
    }
    
    console.log(carros[i]);
    i++;
}

let j = 0;
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);

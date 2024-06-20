const soyNull = null
const soyUndefined = undefined
const soyFalse = false

const a1 = true && "hola mundo" && 150; //Va tomando valor segun lo que sea true
const a2 = false && "hola mundo" && 150; //False
const a3 = true && "hola" && "mundo" && soyFalse && true; 
const a4 = soyFalse || "No soy falso"; 
const a5 = soyFalse || soyUndefined || soyNull || "Ya no soy falso"
const a6 = soyFalse || soyUndefined || true || "Ya no soy falso"

console.log({a1, a2, a3,a4,a5,a6});
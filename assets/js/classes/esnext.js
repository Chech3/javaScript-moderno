//Area del rectangulo
class Rectangulo {
    #area = 0;
    constructor (altura, base) {
        
        this.base = base
        this.altura = altura;
        this.#area = base * altura;
        return this.#area;        
    }

    calcularArea() {
        console.log(this.#area * 2)
    }

}


const rectangulo = new Rectangulo(2, 3);
rectangulo.calcularArea();

console.log(rectangulo)


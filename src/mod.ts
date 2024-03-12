
export interface Arithmeticable<T> {
  add(other: T): T;
  subtract(other: T): T;
  multiply(other: T): T;
  divide(other: T): T;
}


export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private elements: T[];

  constructor() {
      this.elements = [];
  }
  addArithmeticable(element: T) {
      this.elements.push(element);
  }

  getArithmeticable(index: number): T {
      return this.elements[index];
  }

  getNumberOfArithmeticables(): number {
      return this.elements.length;
  }
}

export class Complex implements Arithmeticable<Complex> {
  constructor(private _real: number, private _imaginary: number) {}

  getReal(): number {
    return this._real;
  }

  getImaginary(): number {
    return this._imaginary;
  }

  add(other: Complex): Complex {
    return new Complex(this._real + other._real, this._imaginary + other._imaginary);
  }

  subtract(other: Complex): Complex {
    return new Complex(this._real - other._real, this._imaginary - other._imaginary);
  }

  multiply(other: Complex): Complex {
    const realPart = this._real * other._real - this._imaginary * other._imaginary;
    const imaginaryPart = this._real * other._imaginary + this._imaginary * other._real;
    return new Complex(realPart, imaginaryPart);
  }

  divide(other: Complex): Complex {
    const denominator = other._real * other._real + other._imaginary * other._imaginary;
    const realPart = (this._real * other._real + this._imaginary * other._imaginary) / denominator;
    const imaginaryPart = (this._imaginary * other._real - this._real * other._imaginary) / denominator;
    return new Complex(realPart, imaginaryPart);
  }
}


export class Rational implements Arithmeticable<Rational> {
  constructor(private _numerator: number, private _denominator: number) {
    if (_denominator === 0) {
      throw new Error("El denominador no puede ser 0");
    }
    // Normalizar
    const gcd = this.gcd(_numerator, _denominator);
    this._numerator /= gcd;
    this._denominator /= gcd;
  }

  private gcd(a: number, b: number): number {
    return b === 0 ? a : this.gcd(b, a % b);
  }

  get numerator(): number {
    return this._numerator;
  }

  get denominator(): number {
    return this._denominator;
  }

  add(other: Rational): Rational {
    const newNumerator = this._numerator * other._denominator + other._numerator * this._denominator;
    const newDenominator = this._denominator * other._denominator;
    return new Rational(newNumerator, newDenominator);
  }

  subtract(other: Rational): Rational {
    const newNumerator = this._numerator * other._denominator - other._numerator * this._denominator;
    const newDenominator = this._denominator * other._denominator;
    return new Rational(newNumerator, newDenominator);
  }

  multiply(other: Rational): Rational {
    const newNumerator = this._numerator * other._numerator;
    const newDenominator = this._denominator * other._denominator;
    return new Rational(newNumerator, newDenominator);
  }

  divide(other: Rational): Rational {
    if (other._numerator === 0) {
      throw new Error("Error división por 0");
    }
    const newNumerator = this._numerator * other._denominator;
    const newDenominator = this._denominator * other._numerator;
    return new Rational(newNumerator, newDenominator);
  }

  toString(): string {
    return `${this._numerator}/${this._denominator}`;
  }
}

class RationalToComplexAdapter implements Arithmeticable<Complex> {
  private rational: Rational;

  constructor(rational: Rational) {
    this.rational = rational;
  }

  toComplex(): Complex {
    // Convertir el número racional a un número complejo
    // Usar el numerador como la parte real y establecer la parte imaginaria en cero
    return new Complex(this.rational.numerator, 0);
  }

  add(other: Complex): Complex {
    // Convertir el número racional a un número complejo y realizar la operación de suma
    return this.toComplex().add(other);
  }

  subtract(other: Complex): Complex {
    // Convertir el número racional a un número complejo y realizar la operación de resta
    return this.toComplex().subtract(other);
  }

  multiply(other: Complex): Complex {
    // Convertir el número racional a un número complejo y realizar la operación de multiplicación
    return this.toComplex().multiply(other);
  }

  divide(other: Complex): Complex {
    // Convertir el número racional a un número complejo y realizar la operación de división
    return this.toComplex().divide(other);
  }
}








// EJEMPLOS DE USO
/*const collection = new ArithmeticableCollection<Complex>();
collection.addArithmeticable(new Complex(5, 3));
collection.addArithmeticable(new Complex(2, 1));
collection.addArithmeticable(new Complex(4, 2));
console.log(collection.getNumberOfArithmeticables()); // 3
console.log(collection.getArithmeticable(0)); // 5 + 3i


const rationalCollection = new ArithmeticableCollection<Rational>();
rationalCollection.addArithmeticable(new Rational(5, 1));
rationalCollection.addArithmeticable(new Rational(3, 4));
rationalCollection.addArithmeticable(new Rational(2, 5));
console.log(rationalCollection.getNumberOfArithmeticables()); // 3
console.log(rationalCollection.getArithmeticable(0)); // 5/1
*/

// Ejemplo de uso del adaptador
const complex = new Complex(1, 4); // Un número complejo
const rational = new Rational(2, 1); // Un número racional

// Crear un adaptador para el número racional
const rationalAdapter = new RationalToComplexAdapter(rational);

// Realizar operaciones entre el número complejo y el número racional usando el adaptador
const resultAdd = complex.add(rationalAdapter.toComplex());
const resultSubtract = complex.subtract(rationalAdapter.toComplex());
const resultMultiply = complex.multiply(rationalAdapter.toComplex());
const resultDivide = complex.divide(rationalAdapter.toComplex());

// Imprimir los resultados
console.log("\n");
console.log("Complex:", complex);
console.log("Rational:", rational);
console.log("\n");
console.log("Add:", resultAdd);
console.log("Sub:", resultSubtract);
console.log("Mult:", resultMultiply);
console.log("Div:", resultDivide);


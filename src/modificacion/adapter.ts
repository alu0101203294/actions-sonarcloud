import { Complex } from '../modificacion/complex';
import { Rational } from '../modificacion/rational';
import { Arithmeticable } from '../modificacion/interface';
/**
 * Adaptador que permite que los números racionales se comporten como números complejos
 * Implementa la interfaz Arithmeticable<Complex> para que los números racionales puedan ser operados como números complejos
 * @export
 * @class RationalToComplexAdapter
 * @implements {Arithmeticable<Complex>}
 * 
 */
export class RationalToComplexAdapter implements Arithmeticable<Complex> {
    private rational: Rational;
  
    constructor(rational: Rational) {
      this.rational = rational;
    }
  
    toComplex(): Complex {
      // Convertir el número racional a un número complejo (Usar el numerador como la parte real y establecer la parte imaginaria en cero)
      const racional = this.rational.numerator/this.rational.denominator;
      return new Complex(racional, 0);
    }
  
    add(other: Complex): Complex {
      return this.toComplex().add(other);
    }
  
    subtract(other: Complex): Complex {
      return this.toComplex().subtract(other);
    }
  
    multiply(other: Complex): Complex {
      return this.toComplex().multiply(other);
    }
  
    divide(other: Complex): Complex {
      return this.toComplex().divide(other);
    }
  }
  
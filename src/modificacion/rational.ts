import { Arithmeticable } from "../modificacion/interface";
/**
 * Clase que representa un número racional
 * Implementa la interfaz Arithmeticable<Rational> para que los números racionales puedan ser operados como números racionales
 * @export
 * @class Rational
 * @implements {Arithmeticable<Rational>}
 * 
 */
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
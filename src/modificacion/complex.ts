import { Arithmeticable } from '../modificacion/interface';
/**
 * Colección de elementos que implementan la interfaz Arithmeticable
 * @export
 * @class ArithmeticableCollection
 * @template T
 * 
 */
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
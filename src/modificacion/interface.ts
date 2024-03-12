/**
 * Interfaz que define los métodos de las operaciones aritméticas.
 * @export
 * @interface Arithmeticable
 * @template T
 * 
 */
export interface Arithmeticable<T> {
    add(other: T): T;
    subtract(other: T): T;
    multiply(other: T): T;
    divide(other: T): T;
  }
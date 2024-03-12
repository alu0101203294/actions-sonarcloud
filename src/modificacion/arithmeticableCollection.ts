import { Arithmeticable } from '../modificacion/interface';
/**
 * Colección de elementos que implementan la interfaz Arithmeticable
 * @export
 * @class ArithmeticableCollection
 * @template T
 * 
 */
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
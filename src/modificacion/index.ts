import { Complex } from "../modificacion/complex";
import { Rational } from "../modificacion/rational";
import { RationalToComplexAdapter } from "../modificacion/adapter";

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


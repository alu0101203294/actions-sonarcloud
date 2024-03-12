import 'mocha';
import {expect} from 'chai';
import { Complex } from "../src/modificacion/complex";
import { Rational } from "../src/modificacion/rational";
import { RationalToComplexAdapter } from "../src/modificacion/adapter";
import { ArithmeticableCollection } from "../src/modificacion/arithmeticableCollection";


context('Modificacion', () => {
describe('ArithmeticableCollection', () => {
  it('should add arithmeticable elements', () => {
    const collection = new ArithmeticableCollection<Complex>();
    collection.addArithmeticable(new Complex(5, 3));
    collection.addArithmeticable(new Complex(2, 1));
    collection.addArithmeticable(new Complex(4, 2));
    expect(collection.getNumberOfArithmeticables()).to.equal(3);
  });

  it('should get arithmeticable element by index', () => {
    const collection = new ArithmeticableCollection<Complex>();
    const complex1 = new Complex(5, 3);
    const complex2 = new Complex(2, 1);
    collection.addArithmeticable(complex1);
    collection.addArithmeticable(complex2);
    expect(collection.getArithmeticable(0)).equal(complex1);
    expect(collection.getArithmeticable(1)).equal(complex2);
  });
});

describe('Complex', () => {
  it('should add two complex numbers', () => {
    const complex1 = new Complex(5, 3);
    const complex2 = new Complex(2, 1);
    const result = complex1.add(complex2);
    expect(result.getReal()).to.equal(7);
    expect(result.getImaginary()).to.equal(4);
  });

  it('should subtract two complex numbers', () => {
    const complex1 = new Complex(5, 3);
    const complex2 = new Complex(2, 1);
    const result = complex1.subtract(complex2);
    expect(result.getReal()).to.equal(3);
    expect(result.getImaginary()).to.equal(2);
  });

  it('should multiply two complex numbers', () => {
    const complex1 = new Complex(5, 3);
    const complex2 = new Complex(2, 1);
    const result = complex1.multiply(complex2);
    expect(result.getReal()).to.equal(7);
    expect(result.getImaginary()).to.equal(11);
  });

});

describe('Rational', () => {
  it('should add two rational numbers', () => {
    const rational1 = new Rational(5, 3);
    const rational2 = new Rational(2, 1);
    const result = rational1.add(rational2);
    expect(result.numerator).to.equal(11);
    expect(result.denominator).to.equal(3);
  });

  it('should subtract two rational numbers', () => {
    const rational1 = new Rational(5, 3);
    const rational2 = new Rational(2, 1);
    const result = rational1.subtract(rational2);
    expect(result.numerator).to.equal(1);
    expect(result.denominator).to.equal(-3);
  });

  it('should multiply two rational numbers', () => {
    const rational1 = new Rational(5, 3);
    const rational2 = new Rational(2, 1);
    const result = rational1.multiply(rational2);
    expect(result.numerator).to.equal(10);
    expect(result.denominator).to.equal(3);
  });

  it('should divide two rational numbers', () => {
    const rational1 = new Rational(5, 3);
    const rational2 = new Rational(2, 1);
    const result = rational1.divide(rational2);
    expect(result.numerator).to.equal(5);
    expect(result.denominator).to.equal(6);
  });
});

describe('RationalToComplexAdapter', () => {
  it('should convert rational to complex', () => {
    const rational = new Rational(5, 3);
    const adapter = new RationalToComplexAdapter(rational);
    const result = adapter.toComplex();
    expect(result.getReal()).to.equal(1.6666666666666667);
    expect(result.getImaginary()).to.equal(0);
  });

  it('should add rational and complex using adapter', () => {
    const rational = new Rational(5, 3);
    const complex = new Complex(2, 1);
    const adapter = new RationalToComplexAdapter(rational);
    const result = adapter.add(complex);
    expect(result.getReal()).to.equal(3.666666666666667);
    expect(result.getImaginary()).to.equal(1);
  });

  it('should subtract rational and complex using adapter', () => {
    const rational = new Rational(5, 3);
    const complex = new Complex(2, 1);
    const adapter = new RationalToComplexAdapter(rational);
    const result = adapter.subtract(complex);
    expect(result.getReal()).to.equal(-0.33333333333333326);
    expect(result.getImaginary()).to.equal(-1);
  });

  it('should multiply rational and complex using adapter', () => {
    const rational = new Rational(5, 3);
    const complex = new Complex(2, 1);
    const adapter = new RationalToComplexAdapter(rational);
    const result = adapter.multiply(complex);
    expect(result.getReal()).to.equal(3.3333333333333335);
    expect(result.getImaginary()).to.equal(1.6666666666666667);
  });

});
});
import { expect } from 'chai';
import { Event, Observer, Observable, GenericObservable } from '../src/mod.js';

context('Modificacion P8', () => {
describe('Observable', () => {
  let observable: Observable<string>;
  let observer: Observer<string>;

  beforeEach(() => {
    observable = new GenericObservable<string>();
    observer = {
      update(event: Event<string>): void {
        console.log(`Evento ${event.id} recibido:`, event.data);
      }
    };
  });

    // Observable debe ser una instancia de GenericObservable
  it('should be an instance of GenericObservable', () => {
    expect(observable).to.be.an.instanceOf(GenericObservable);
  });

  // Observer debe ser una instancia de ExampleObserver
  it('should have correct properties in Event instance', () => {
    const event: Event<string> = { id: "1", data: "TestEvento1" };
    expect(event).to.have.property('id').that.is.a('string');
    expect(event).to.have.property('data').that.is.a('string');
  });

  // Observer debe tener la propiedad update
  it('should have correct properties in Observer instance', () => {
    expect(observer).to.have.property('update').that.is.a('function');
  });

  // Observable debe tener la propiedad addObserver
  it('should have correct properties in Observable instance', () => {
    expect(observable).to.have.property('addObserver').that.is.a('function');
    expect (observable).to.have.property('removeObserver').that.is.a('function');
    expect (observable).to.have.property('notify').that.is.a('function');
  });

  // Debe añadir y notificar a los observadores
  it('should add and notify observers', () => {
    observable.addObserver(observer);
    
    let eventReceived: string | undefined;

    observer.update = (event: Event<string>) => {
      eventReceived = event.data;
    };

    observable.notify({ id: "1", data: "TestEvento1" });
    
    expect(eventReceived).to.equal("TestEvento1");
  });

  //Verificar que cuando un observador es eliminado de un observable no recibe notificaciones al producirse un evento.
  it('should not notify removed observers', () => {
    observable.addObserver(observer);
    observable.removeObserver(observer);

    let eventReceived: string | undefined;

    observer.update = (event: Event<string>) => {
      eventReceived = event.data;
    };

    observable.notify({ id: "1", data: "TestEvento1" });
    
    expect(eventReceived).to.be.undefined;
  });




});
});
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

  it('should remove observers', () => {
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
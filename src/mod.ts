/**
 * Sistema de notificación de eventos genéricos haciendo uso del patrón Observable. (Ejercicio - PE101)
 * José Miguel Díaz Gonzalez
 */
/**
 * Interfaz genérica para eventos
 * @typeParam T Tipo de dato que se va a notificar
 * @param id Identificador del evento
 * @param data Datos del evento
 */
export interface Event<T> {
  id: string;
  data: T;
}

/**
 * Interfaz genérica para observadores
 * @typeParam T Tipo de dato que se va a notificar
 * @method update Método para actualizar el observador
 */
export interface Observer<T> {
  update(event: Event<T>): void;
}


/**
 * Interfaz genérica para observables
 * @class Observable
 * @param T Tipo de dato que se va a notificar
 * @method addObserver Método para añadir un observador
 * @method removeObserver Método para eliminar un observador
 * @method notify Método para notificar un evento
 * 
 */
export interface Observable<T> {
  addObserver(observer: Observer<T>): void;
  removeObserver(observer: Observer<T>): void;
  notify(event: Event<T>): void;
}


// Clase genérica para observables
/**
 * Clase genérica para observables
 * @class GenericObservable
 * @param T Tipo de dato que se va a notificar
 * @method addObserver Método para añadir un observador
 * @method removeObserver Método para eliminar un observador
 * @method notify Método para notificar un evento
 * 
 */
export class GenericObservable<T> implements Observable<T> {
  private observers: Observer<T>[] = [];

  addObserver(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer<T>): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(event: Event<T>): void {
    this.observers.forEach(observer => observer.update(event));
  }
}

// EJEMPLOS DE USO
/**
 * Clase de ejemplo para observadores
 * @class ExampleObserver
 * @param T Tipo de dato que se va a notificar
 * @method update Método para actualizar el observador
 * @example
 * ```ts
 * Evento 1 recibido: TestEvento1
 * Evento 2 recibido: TestEvento2
 * Evento 3 recibido: TestEvento3
 * ```
 */
export class ExampleObserver implements Observer<string> {
  update(event: Event<string>): void {
    console.log(`Evento ${event.id} recibido:`, event.data);
  }
}

const observable: Observable<string> = new GenericObservable<string>();
const observer: Observer<string> = new ExampleObserver();


observable.addObserver(observer);


observable.notify({ id: "1", data: "TestEvento1" });
observable.notify({ id: "2", data: "TestEvento2" });
observable.notify({ id: "3", data: "TestEvento3" });


observable.removeObserver(observer);
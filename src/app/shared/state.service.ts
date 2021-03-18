import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export class StateService<T> {

  private state$: BehaviorSubject<T>;

  protected get state(): T {
    return this.state$.getValue();
  }

  // Requires an initial value and emits the current value - the last emitted - to new subscribers
  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  protected select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: T) => mapFn(state)),
      // Only emit when the current value is different than the last
      distinctUntilChanged()
    );
  }

  protected setState(newState: Partial<T>) {
    this.state$.next({
      ...this.state,
      ...newState,
    });
  }
}

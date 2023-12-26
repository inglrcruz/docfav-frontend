import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  private loading: BehaviorSubject<Boolean>

  constructor() {
    this.loading = new BehaviorSubject<Boolean>(false)
  }

  /**
   * Provides an Observable stream of loading status updates.
   *
   * @returns An Observable that emits boolean values (true for loading, false for not loading).
   */
  public loadingObservable(): Observable<Boolean> {
    return this.loading.asObservable()
  }

  /**
   * Updates the loading status, emitting a new value to the loadingObservable stream.
   *
   * @param status The new loading status to emit (true or false).
   */
  public loadingStatus(status: Boolean) {
    this.loading.next(status)
  }

}

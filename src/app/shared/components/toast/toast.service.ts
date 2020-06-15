import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Models
import { Toast } from '@data/toast/toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts$: BehaviorSubject<Toast[]> = new BehaviorSubject([]);

  constructor() {}

  getToasts(): BehaviorSubject<Toast[]> {
    return this.toasts$;
  }

  addToast(type: string, message: string) {
    this.toasts$.next([
      ...this.toasts$.value,
      {
        type,
        message,
      },
    ]);
  }

  dismissToast(toastIndex: number) {
    this.toasts$.next(
      this.toasts$.value.filter((toast: Toast, i: number) => i !== toastIndex)
    );
  }
}

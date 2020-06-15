import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Data model
import { Toast, toastTypes } from '@data/toast/toast';

// Services
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts$: BehaviorSubject<Toast[]>;
  toasts: Toast[];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toasts$ = this.toastService.getToasts();

    this.toasts$.subscribe((toasts) => {
      this.toasts = toasts;
    });
  }

  // get classes
  getClass(toast: Toast) {
    switch (toast.type) {
      case toastTypes.ERROR:
        return ['bg-red-500', 'text-white'];
      case toastTypes.SUCCESS:
        return ['bg-green-500', 'text-white'];
      case toastTypes.WARNING:
        return ['bg-yellow-500', 'text-yellow-900'];
      case toastTypes.INFO:
        return ['bg-blue-500', 'text-white'];

      default:
        return ['bg-gray-700', 'text-white'];
    }
  }

  // functions
  close(toastIndex: number) {
    this.toastService.dismissToast(toastIndex);
  }

  ngOnDestroy() {
    this.toasts$.unsubscribe();
  }
}

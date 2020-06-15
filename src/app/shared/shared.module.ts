import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Services
import { ToastService } from './components/toast/toast.service';

// Components
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, MatSnackBarModule],
  exports: [ToastComponent],
  providers: [ToastService],
})
export class SharedModule {}

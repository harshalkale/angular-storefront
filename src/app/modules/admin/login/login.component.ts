import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {
  FormGroup,
  Validators,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';

import { Auth } from '@data/auth/auth';
import { validateEmail } from '@shared/validators/email';

import { ToastService } from '@shared/components/toast/toast.service';
import { toastTypes } from '@data/toast/toast';

import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  // Form control getters
  public get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  public get password(): AbstractControl {
    return this.loginForm.get('password');
  }
  // ---

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        {
          validators: [Validators.required, validateEmail],
          updateOn: 'blur',
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });
  }

  // Validation utility methods
  getInputClasses(control: AbstractControl) {
    return {
      'text-gray-700': control.touched && control.dirty,
      'text-red-700': (control.touched || control.dirty) && control.invalid,
    };
  }
  // --

  async login() {
    const { email, password }: Auth = this.loginForm.value;
    try {
      await this.authService.login(email, password);
      this.router.navigate(['/admin']);
    } catch (error) {
      this.toastService.addToast(
        toastTypes.ERROR,
        error.message || 'Something went wrong!'
      );
    }
  }
}

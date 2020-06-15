import { AbstractControl } from '@angular/forms';

/**
 * Validate the entered email
 * @param control The input control for validation
 */
export function validateEmail(
  control: AbstractControl
): { [key: string]: any } | null {
  const match = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
    control.value
  );

  return match ? null : { invalidEmail: { value: control.value } };
}

export enum toastTypes {
  DEFAULT = 'default',
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
}

export class Toast {
  message: string;
  type: string;
}

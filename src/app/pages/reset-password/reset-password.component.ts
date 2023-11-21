import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from '../../../Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  showPassword = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validators: this.mustMatch('newPassword', 'confirmPassword') });
  }

  ngOnInit() {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const form = formGroup as FormGroup;
      const control = form.controls[controlName];
      const matchingControl = form.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return null;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
        return { mustMatch: true };
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }

  goBackToForgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }

  resetPassword() {
    if (this.resetPasswordForm.invalid) {
      return;
    }

    const { newPassword } = this.resetPasswordForm.value;

    console.log(newPassword);

    // this.authService.resetPassword(newPassword).subscribe({
    //   next: () => {
    //     this.router.navigate(['/login']);
    //   },
    //   error: (error) => {
    //     console.error('Erro ao redefinir a senha', error);
    //     this.errorMessage = 'Erro ao redefinir a senha';
    //   },
    // });
  }
}

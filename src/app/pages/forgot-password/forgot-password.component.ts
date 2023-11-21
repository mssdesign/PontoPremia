import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  showPassword = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  goBackToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToResetPassword() {
    this.router.navigate(['/resetPassword']);
  }

  sendPasswordResetLink() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    
    const { email } = this.forgotPasswordForm.value;
    console.log(email);

    // this.authService.sendPasswordResetEmail(email).subscribe({
    //   next: () => {},
    //   error: (error: any) => {
    //     console.error('Erro ao enviar link de redefinição de senha', error);
    //     this.errorMessage = 'Erro ao enviar link de redefinição de senha';
    //   },
    // });
  }
}

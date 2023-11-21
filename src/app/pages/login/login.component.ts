import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { cpf, password } = this.loginForm.value;
    this.authService.login(cpf, password).subscribe({
      next: (user) => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Erro de login', error);
        this.errorMessage = 'Usuário ou senha inválidos';
      },
    });
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}

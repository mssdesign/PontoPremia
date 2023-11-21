import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showPassword = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  goBackToLogin() {
    this.router.navigate(['/login']);
  }

register() {
  if (this.registerForm.invalid) {
    console.log('Cadastro inválido')
    return;
  }
  
  const { nome, cpf, email, password } = this.registerForm.value;
  
  this.authService.register(nome, cpf, email, password).subscribe({
    next: (user) => {
      this.router.navigate(['/login']);
    },
    error: (error) => {
      console.error('Erro no registro', error);
      this.errorMessage = 'Erro ao criar cadastro';
    },
  });
}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  isValid = false;

  constructor(private router: Router) {}

  validarCampos() {
    this.isValid = this.email.trim() !== '' && this.password.trim() !== '';
  }

  continuar() {
    sessionStorage.setItem('user', this.email);
    this.router.navigate(['/']);
  }
}

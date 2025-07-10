import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CartService } from '../services/cart.service'; 

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  tarjeta = '';
  caducidad = '';
  cvc = '';
  cargando = false;

  constructor(private router: Router, private cartService: CartService) {}

  pagar() {
    this.cargando = true;

    setTimeout(() => {
      this.cargando = false;

      const tarjetaSinEspacios = this.tarjeta.replace(/\s+/g, '');
      const formatoCaducidad = /^\d{2}\/\d{2}$/.test(this.caducidad);
      const formatoCvc = /^\d{3}$/.test(this.cvc);

      if (tarjetaSinEspacios === '4999999999999999' && formatoCaducidad && formatoCvc) {
        
        this.cartService.limpiarCarrito();

        
        this.router.navigate(['/confirmation']);
      } else {
        alert('Hay un error procesando la compra, revise los datos introducidos.');
      }
    }, 3000);
  }
}



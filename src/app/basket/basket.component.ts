import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  carrito: any[] = [];
  total = 0;


  nombre = '';
  apellido = '';
  direccion = '';
  cp = '';
  telefono = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
      this.total = this.carrito.reduce((sum, prod) => sum + prod.price * prod.cantidad, 0);
    }
  }

  irAPago() {
    this.router.navigate(['/payment']);
  }

  volverAlInicio() {
    this.router.navigate(['/']);
  }
}








import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  carrito: any[] = [];
  total = 0;

  nombre = '';
  apellido = '';
  direccion = '';
  cp = '';
  telefono = '';

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.carrito$.subscribe((productos) => {
      this.carrito = productos;
      this.total = productos.reduce((sum, item) => sum + item.price * item.cantidad, 0);
    });
  }

  aceptar() {
    alert('Pedido realizado con éxito');
    this.cartService.limpiarCarrito();
  }

  volverInicio() {
    this.router.navigate(['/']);
  }
}







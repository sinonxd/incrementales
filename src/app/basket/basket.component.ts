import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  constructor(private router: Router) {}

  ngOnInit() {
    const datos = sessionStorage.getItem('carrito');
    if (datos) {
      this.carrito = JSON.parse(datos);
      this.total = this.carrito.reduce((sum, item) => sum + item.price * item.cantidad, 0);
    }
  }

  aceptar() {
    alert('Pedido realizado con éxito');
  }

  volverAlInicio() {
    this.router.navigate(['/']);
  }
}





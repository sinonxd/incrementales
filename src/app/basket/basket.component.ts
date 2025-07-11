import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  carrito: any[] = [];

  nombre: string = '';
  apellido: string = '';
  direccion: string = '';
  cp: string = '';
  telefono: string = '';

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.carrito$.subscribe(data => {
      this.carrito = data;
    });
  }

  get total(): number {
    return this.carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  }

  irAPago() {
    this.router.navigate(['/payment']);
  }

  volverAlInicio() {
    this.router.navigate(['/']);
  }
}











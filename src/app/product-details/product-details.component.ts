import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  producto: any = {};
  cantidad = 1;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://fakestoreapi.com/products/${id}`).subscribe((data: any) => {
      this.producto = data;
    });
  }

  anadirAlCarrito() {
    const carrito = JSON.parse(sessionStorage.getItem('carrito') || '[]');
    const index = carrito.findIndex((p: any) => p.id === this.producto.id);

    if (index >= 0) {
      carrito[index].cantidad += this.cantidad;
    } else {
      carrito.push({ ...this.producto, cantidad: this.cantidad });
    }

    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto añadido al carrito');
  }
}



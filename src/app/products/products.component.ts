import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() terminoFiltro: string = '';
  products: any[] = [];
  productosFiltrados: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://fakestoreapi.com/products')
      .subscribe(data => {
        this.products = data;
        this.filtrarProductos();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['terminoFiltro']) {
      this.filtrarProductos();
    }
  }

  filtrarProductos(): void {
    const filtro = this.terminoFiltro.toLowerCase();
    this.productosFiltrados = this.products.filter(p =>
      p.title.toLowerCase().includes(filtro)
    );
  }
}





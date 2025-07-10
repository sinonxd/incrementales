import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carritoKey = 'carrito';
  private carritoSubject = new BehaviorSubject<any[]>(this.obtenerCarritoDesdeLocalStorage());
  carrito$ = this.carritoSubject.asObservable();

  private obtenerCarritoDesdeLocalStorage(): any[] {
    const datos = localStorage.getItem(this.carritoKey);
    return datos ? JSON.parse(datos) : [];
  }

  private actualizarLocalStorage(carrito: any[]) {
    localStorage.setItem(this.carritoKey, JSON.stringify(carrito));
  }

  obtenerCarritoActual(): any[] {
    return this.carritoSubject.getValue();
  }

  agregarProducto(producto: any, cantidad: number) {
    const carrito = this.obtenerCarritoActual();
    const existente = carrito.find(p => p.id === producto.id);

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      carrito.push({ ...producto, cantidad });
    }

    this.actualizarLocalStorage(carrito);
    this.carritoSubject.next(carrito);
  }

  limpiarCarrito() {
    this.carritoSubject.next([]);
    localStorage.removeItem(this.carritoKey);
  }
}


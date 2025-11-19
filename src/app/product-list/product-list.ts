import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  title = 'Mi lista de productos';
  headers = {description: 'Producto', price: 'Precio', available: 'Disponible'};
  constructor(){}
}

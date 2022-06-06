import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
@Component({
  selector: 'app-tarjeta-cotizar',
  templateUrl: './tarjeta-cotizar.component.html',
  styleUrls: ['./tarjeta-cotizar.component.css']
})
export class TarjetaCotizarComponent implements OnInit {
  @Input() product: any;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }
  addToCotizar(){
    this.productService.addToCotizar(this.product);
  }
}

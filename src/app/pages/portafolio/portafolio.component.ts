import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {

 ver=false

  constructor(public _productosService:ProductosService){
  
   
  }
}

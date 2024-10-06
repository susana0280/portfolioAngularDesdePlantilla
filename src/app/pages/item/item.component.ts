import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductDescripcion } from '../../interfaces/productDescripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{

  producto? :ProductDescripcion
  id?:string

  constructor(private route:ActivatedRoute, public _productoService:ProductosService){}
  
  
  ngOnInit(): void {
   this._productoService.cargando=true
  
   this.route.params.subscribe(parametros=>{
    this.id=parametros['id']
   
    
    this._productoService.getProduct(parametros["id"]).subscribe((product:ProductDescripcion)=>{
    
      setTimeout(()=>{
       
        this.producto=product
        this._productoService.cargando=false
      },3000)
     
    })
   
  })

  }
}

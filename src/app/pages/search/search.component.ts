import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute,public _productService:ProductosService){

   
  }
 
  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(param=>{
     
      this._productService.buscarProducto(param['termino'])
      
    })
 
  }

}

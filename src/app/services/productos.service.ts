import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/producto.interface';
import { ProductDescripcion } from '../interfaces/productDescripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando=true
  productos:Productos[]=[]
  productosFilter:Productos[]=[]
  

  constructor(private http:HttpClient) { 

      this.cargarProductos()

  }

  

private cargarProductos() {

return new Promise<void>((resolve,reject)=>{

  this.http.get<Productos[]>("https://cursoplantillaangular-html-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json").subscribe((res: Productos[]) => {
    this.cargando=true
   
       this.productos = res;
        this.cargando=false;
        resolve();
    });
  });
}

//________________________-
public getProduct(id:string){
 return this.http.get<ProductDescripcion>(`https://cursoplantillaangular-html-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`)

}



//_________________________
public buscarProducto(termino:string){

  if(this.productos.length===0){
    this.cargarProductos().then(()=>{
      this.filtrarProductos(termino)
    })
  }
  else{
    this.filtrarProductos(termino)
  }

    
}

//____________________-


private filtrarProductos(termino:string){
 this.productosFilter=[]
 termino=termino.toLowerCase()

  this.productos.forEach(producto=>{

   const  productoLower=producto.titulo.toLowerCase()
    if(producto.categoria.indexOf(termino)>=0 || productoLower.indexOf(termino)>=0){
    
      this.productosFilter.push(producto)
    }
 
  })
}

}

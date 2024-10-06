import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-page.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  equipo:any[]=[]
  info:infoPagina={}
  cargada=false

  constructor(private http:HttpClient) {
     this.cargarInfo()
    this.infoEquipo()
   
    
   }


   //_________Cargar informacion enlaces de redes sociales_____________
   private cargarInfo(){
      //leer un archivo JSON
        this.http.get("assets/data/data-pagina.json").subscribe((res:infoPagina)=>{
        this.cargada=true
        this.info=res
      })
      }
    

    //________________cargar equipo informacion_________
    private infoEquipo(){
      this.http.get("https://cursoplantillaangular-html-default-rtdb.europe-west1.firebasedatabase.app/Equipo.json").subscribe((res:any)=>{
        
        this.equipo=res   
        
      })

    }
  }
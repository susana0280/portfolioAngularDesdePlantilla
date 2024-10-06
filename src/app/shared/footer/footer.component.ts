import { Component } from '@angular/core';
import { infoPagina } from '../../interfaces/info-page.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(public _infoPagina:InfoPaginaService){}
  anio:number=new Date().getFullYear()

}

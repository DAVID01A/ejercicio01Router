import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent {
  @Input() id:number = 0;
  muebles = [
    {
      id: 1,
      imagen: "https://mubak.com/1512-large_default/sillon-relax-electrico-modelo-laura-usb.jpg",
      descripcion: "Cómodo sillón de cuero, ideal para relajarse."
    },
    {
      id: 2,
      imagen: "https://tusmesasysillas.com/10107-thickbox_default/mesa-de-centro-redonda-nori-de-estilo-nordico-en-blanco-y-madera.jpg",
      descripcion: "Mesa de centro de madera maciza, perfecta para cualquier sala de estar."
    },
    {
      id: 3,
      imagen: "https://www.worten.es/i/1564bf309f3e69f45f6b6fd17a4818cd15ab0051",
      descripcion: "Cama doble con cabecero tapizado, para un descanso reparador."
    }
  ];

}

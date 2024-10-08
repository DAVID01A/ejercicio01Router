import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DescripcionComponent } from './descripcion/descripcion.component';

export const routes: Routes = [
{'path': 'inicio', 'component': InicioComponent},
{'path': 'detalle/:id', 'component': DescripcionComponent},
{'path': '', redirectTo: 'inicio', 'pathMatch': 'full'}
];

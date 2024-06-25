import { LoginComponent } from './home/login/login.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { Routes } from '@angular/router';
import { EstudioComponent } from './home/estudio/estudio.component';
import { BeneficiosComponent } from './home/beneficios/beneficios.component';
import { PromocionesComponent } from './home/promociones/promociones.component';
import { CitasComponent } from './home/citas/citas.component';
import { FacturasComponent } from './home/facturas/facturas.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'estudio', component: EstudioComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'facturas', component: FacturasComponent },
];

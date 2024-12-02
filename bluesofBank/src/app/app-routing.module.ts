import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard/components/dashboard.component';
import { AccountListComponent } from './features/accounts/components/account-list.component';


export const routes: Routes = [
  { path: '', component: DashboardComponent }, // Redirección por defecto
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accounts', component: AccountListComponent } // Ruta de fallback para rutas no existentes
];
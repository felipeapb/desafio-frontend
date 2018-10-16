import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogadoComponent } from './logado/logado.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AuthGuard } from './guard/auth-guard';




const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logado', component: LogadoComponent, canActivate: [AuthGuard] }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

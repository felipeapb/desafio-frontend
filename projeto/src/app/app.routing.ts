import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogadoComponent } from './logado/logado.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';




const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logado', component: LogadoComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

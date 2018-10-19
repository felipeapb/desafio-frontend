import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogadoComponent } from './logado/logado.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AuthGuard } from './guard/auth-guard';
import { Error404Component} from './formupages/error404/error404.component';
import { EditarComponent} from './editar/editar.component';






const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logado', component: LogadoComponent, canActivate: [AuthGuard] },
  {path: 'editar/:id', component: EditarComponent, canActivate: [AuthGuard] },
  {path: 'editar', component: EditarComponent, canActivate: [AuthGuard] },
  {path: '**', component: Error404Component},


];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

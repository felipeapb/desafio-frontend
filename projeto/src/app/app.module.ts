import { AuthService } from './login/auth.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogadoComponent } from './logado/logado.component';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './guard/auth-guard';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './logado/local-storage.service';
import { AppHttpService } from './app-http.service';
import { Error404Component } from './formupages/error404/error404.component';
import { EditarComponent} from './editar/editar.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogadoComponent,
    Error404Component,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    LocalStorageService,
    AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsuariosIngresarComponent } from './components/usuarios-ingresar/usuarios-ingresar.component';
import { UsuariosRegistrarComponent } from './components/usuarios-registrar/usuarios-registrar.component';
import { UsuariosListarComponent } from './components/usuarios-listar/usuarios-listar.component';
import {UsuariosService} from "./services/usuarios.service";
import {FormsModule} from '@angular/forms';
import { ProvinciaListarComponent } from './components/provincia-listar/provincia-listar.component'
import { ProvinciasService } from "./services/provincias.service";
import { ProvinciaHomeComponent } from './components/provincia-home/provincia-home.component';
import { AuthGuard } from './auth.guard';
import { ProvinciaVistaComponent } from './components/provincia-vista/provincia-vista.component';
import { UsuariosPrincipalComponent } from './components/usuarios-principal/usuarios-principal.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AlpieComponent } from './components/alpie/alpie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuariosIngresarComponent,
    UsuariosRegistrarComponent,
    UsuariosListarComponent,
    ProvinciaListarComponent,
    ProvinciaHomeComponent,
    ProvinciaVistaComponent,
    UsuariosPrincipalComponent,
    AlpieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ProvinciasService, UsuariosService, AuthGuard,{
	provide: HTTP_INTERCEPTORS,
	useClass: TokenInterceptorService,
	multi:true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListarComponent } from "./components/usuarios-listar/usuarios-listar.component";
import { ProvinciaListarComponent } from "./components/provincia-listar/provincia-listar.component";
import { ProvinciaHomeComponent } from "./components/provincia-home/provincia-home.component";
import { UsuariosIngresarComponent } from './components/usuarios-ingresar/usuarios-ingresar.component';
import { AuthGuard } from './auth.guard';
import { ProvinciaVistaComponent } from './components/provincia-vista/provincia-vista.component';
import { UsuariosRegistrarComponent } from './components/usuarios-registrar/usuarios-registrar.component';
import { UsuariosPrincipalComponent } from './components/usuarios-principal/usuarios-principal.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'usuarios/principal',
		pathMatch:'full'
	},
	
 	 {
		path: 'usuarios/listar',
		component: UsuariosListarComponent,
		canActivate: [AuthGuard]
	},
	
	{
		path: 'provincia/listar',
		component: ProvinciaListarComponent,
		canActivate: [AuthGuard]
	},

	{
		path: 'provincia/home',
		component: ProvinciaHomeComponent,
		canActivate: [AuthGuard]
	},

	{
		path:'usuarios/ingresar',
		component: UsuariosIngresarComponent
	},
	{
		path:'provincia/vista',
		component: ProvinciaVistaComponent,
		canActivate: [AuthGuard]
	},

	{
		path:'usuarios/registrar',
		component: UsuariosRegistrarComponent
	},

	{
		path:'usuarios/principal',
		component: UsuariosPrincipalComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

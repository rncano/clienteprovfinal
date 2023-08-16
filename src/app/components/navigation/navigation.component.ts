import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { ProvinciasService } from 'src/app/services/provincias.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  estaLogueado = false;


  constructor(private usuariosService:UsuariosService, private provinciasService:ProvinciasService, 
    private router:Router) { }

  logout(){
    /*Es de notar que el metodo logOut podria haberse hecho en un componente y mantener la sintaxis usuarios/salir pero nos vamos a ahorrar ese paso*/ 
      this.usuariosService.logOut();
    console.log("Cerrando sesion!!!");
    this.router.navigate(['usuarios/principal']);
    this.estaLogueado = false
    }

    get isLoggedIn() {

      return this.usuariosService.estaLogueado();
    }

  ngOnInit(): void {

    this.estaLogueado = this.usuariosService.estaLogueado();
  }

}

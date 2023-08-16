import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-principal',
  templateUrl: './usuarios-principal.component.html',
  styleUrls: ['./usuarios-principal.component.css']
})
export class UsuariosPrincipalComponent implements OnInit {

  id = '2';
  

  irIniciarSesion(){
    this.router.navigate(['usuarios/ingresar'])
  
}

irRegistro(){
  this.router.navigate(['usuarios/registrar'])
}
  constructor(private usuariosService:UsuariosService,private router:Router) { }

  ngOnInit(): void {

    
  }

}

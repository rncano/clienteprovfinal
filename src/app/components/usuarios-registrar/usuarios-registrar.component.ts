import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarioModel';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios-registrar',
  templateUrl: './usuarios-registrar.component.html',
  styleUrls: ['./usuarios-registrar.component.css']
})
export class UsuariosRegistrarComponent implements OnInit {

  user={  nombre:"", email:"", password:"",repassword:"", rol:""};

  usuarios: Usuario[];

  errorNombre=0;
  errorPassword=0;
  errorRePassrword=0;
  errorEmail=0;
  errorRol=0;

errorNombreVisible: boolean = false;
errorPasswordVisible: boolean = false;
errorRePassrwordVisible: boolean = false;
errorEmailVisible: boolean = false;


  nuevo: Usuario = {};
  
  constructor(private usuariosService: UsuariosService, private router:Router) {
  
   this.usuarios =[]; 
   console.log("Usuarios listar");
    console.log(this.usuarios);
  }


  registrar() {
    console.log("Sign Up");
    console.log(this.user);
  
    this.usuariosService.guardarUsuario(this.user).subscribe(
      (response) => {
        console.log("Respuesta de la base de datos:", response);


        alert('Usuario agregado con exito!')
        this.router.navigate(['usuario/ingresar']);
          
      }
     
    );
  
    // Resto del código
  
    this.nuevo = {};
  }
  

  verificarForm(): boolean {
    this.errorNombre = this.verificarNombre(this.user.nombre);
    this.errorPassword = this.verificarPassword(this.user.password);
    this.errorRePassrword = this.verificarRePassword(this.user.password, this.user.repassword);
    this.errorEmail = this.verificarEmail(this.user.email);
  
    // Variable para controlar la visibilidad de los mensajes de error
    let hayErrores: boolean = false;
  
    if (this.errorNombre !== 0) {
      this.errorNombreVisible = true;
      hayErrores = true;
    } else {
      this.errorNombreVisible = false;
    }
  
    if (this.errorPassword !== 0) {
      this.errorPasswordVisible = true;
      hayErrores = true;
    } else {
      this.errorPasswordVisible = false;
    }
  
    if (this.errorRePassrword !== 0) {
      this.errorRePassrwordVisible = true;
      hayErrores = true;
    } else {
      this.errorRePassrwordVisible = false;
    }
  
    if (this.errorEmail !== 0) {
      this.errorEmailVisible = true;
      hayErrores = true;
    } else {
      this.errorEmailVisible = false;
    }
  
    return !hayErrores;
  }
  


 private verificarNombre(nombre:string):number {
    const patron=/^[A-Z][A-z,a-z\s]+$/;
    if(nombre.length==0)
      return 1;
    if(nombre.length>20)
      return 2;
    if(!patron.test(nombre))
      return 3;
    return 0;
  }
  
  private verificarPassword(password:any): number {
    const patron=/^[A-Za-z0-9@]{5,20}$/;
    if(password.length==0)
      return 1;
    if(password.length>20)
      return 2;
    if(!patron.test(password))
      return 3;
    return 0;
  }
  
  private verificarRePassword(password:any, repassword:any): number {
    if(password!=repassword){
      return 1;
    }
    return 0;
  }
  
  private verificarEmail(email: any): number {
    const patron = /^[a-z0-9]{1,30}@[a-z0-9]{1,30}\.[a-z]{2,3}$/;// email: alfanum @ alfanum . alfab
    if (email=== undefined)
      return 1;
    if (email.length > 30)
      return 2;
    if (!patron.test(email))
      return 3;
    return 0;
  }

  limpiarNombre() {
    if (this.errorNombre > 0) {
      console.log("Limpiar nombre");
      this.user.nombre = "";
      this.errorNombre = 0;
      this.errorNombreVisible = false;
    }
  }
  
  limpiarPassword() {
    if (this.errorPassword > 0) {
      console.log("Limpiar password");
      this.user.password = "";
      this.errorPassword = 0;
      this.errorPasswordVisible = false;
    }
  }
  
  limpiarRePassword() {
    if (this.errorRePassrword > 0) {
      console.log("Limpiar repassword");
      this.user.repassword = "";
      this.errorRePassrword = 0;
      this.errorRePassrwordVisible = false;
    }
  }
  
  limpiarEmail() {
    if (this.errorEmail > 0) {
      console.log("Limpiar email");
      this.user.email = "";
      this.errorEmail = 0;
      this.errorEmailVisible = false;
    }
  }
  
  ngOnInit(): void {
  }

}

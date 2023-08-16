import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { Usuario } from "src/app/models/usuarioModel";


@Injectable({
  providedIn: 'root'
})
export class UsuariosService{
	API_URI = 'http://localhost:3000/user';
  //
  //'http://localhost:3000/user';
	usuarios: Usuario[];

	
	constructor(private http: HttpClient){
    
    this.usuarios = [{
      "id": "1",
      "nombre": "Pedro",
      "email": "pedro@email.net",
      "password": "123456",
      "rol": "admin"
    }, {
      "id": "2",
      "nombre": "Juan",
      "email": "juan@email.net",
      "password": "123456",
      "rol": "usuario"
    }, {
      "id": "3",
      "nombre": "Hugo",
      "email": "hugo@email.net",
      "password": "123456",
      "rol": "usuario"
    }, {
      "id": "4",
      "nombre": "Carlos",
      "email": "carlos@email.net",
      "password": "123456",
      "rol": "admin"
    }, {
      "id": "5",
      "nombre": "Maria",
      "email": "maria@email.net",
      "password": "123456",
      "rol": "admin"
    }];
  }
  listarUsuarios(){
   
    return this.http.get(`${this.API_URI}/list`);
  
  }

  buscarUsuario(id: string) {
    return this.http.get(`${this.API_URI}/find/${id}`);
  }
  
  guardarUsuario(usuario: Usuario){
    return this.http.post(`${this.API_URI}/add`,usuario);
  }
  
  actualizarUsuario(id:string, actualizaUsuario: Usuario){
    return this.http.put(`${this.API_URI}/update/${id}`,actualizaUsuario);
  }
  
  eleminarUsuario(id:string){
    return this.http.delete(`${this.API_URI}/delete/${id}`);
  }

  loginUsuario(usuario:Usuario){
    return this.http.post(`${this.API_URI}/signin/`,usuario);
  }
  
  setToken(token:string){
		localStorage.setItem('token',token);
	}
  
  getToken(){//Obtenemos el token que despues enviara el interceptor x cada req
		return localStorage.getItem('token');
	}

isLoggedIn():Boolean{
  return !!localStorage.getItem('token'); //Si existe token retorna true
  //es el equivalente de testearlo con if pero ahora en una sola linea.
}

logOut(){
  localStorage.removeItem('token');
}

public estaLogueado(): boolean {
  return !!localStorage.getItem('token');
}


}




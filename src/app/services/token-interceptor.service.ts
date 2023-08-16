import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {UsuariosService} from '../services/usuarios.service';
import { ProvinciasService } from './provincias.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private usuariosService:UsuariosService, private provinciasService:ProvinciasService
  ){}
  
  intercept(req:any,next:any){
    const tokenizeReq=req.clone({
      setHeaders:{
       Authorization: `Bearer ${this.usuariosService.getToken()}`,
      
      }
    })
    return next.handle(tokenizeReq);
  }
  
}

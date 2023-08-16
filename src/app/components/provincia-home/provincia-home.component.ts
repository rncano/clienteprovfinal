import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Provincia } from 'src/app/models/provinciaModel';
import { Usuario } from 'src/app/models/usuarioModel';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-provincia-home',
  templateUrl: './provincia-home.component.html',
  styleUrls: ['./provincia-home.component.css']
})
export class ProvinciaHomeComponent implements OnInit {

  titulo:String ="REPÚBLICA ARGENTINA";
  seleccionMult:any[] = [];

  provincia: Provincia[]; // Esta parte llama a la clase models
  
   usuarios: Usuario[];
  revelar:boolean=false;// para ocultar tabla

  seleccionradio:String="";
  videos: any;

 
  rol: any;
  nombre: any;

  imagenProvincias: string[] = [];
  constructor(private usuariosService:UsuariosService, private provinciasService: ProvinciasService,     private route: ActivatedRoute,) {
    

    this.provincia=[];
    this.usuariosService
    this.usuarios=[];
    this.rol = localStorage.getItem('rol') || "";
    this.nombre = localStorage.getItem('nombre') || "";  
    
   }


  ngOnInit(): void {
    this.provinciasService.listarProvincias().subscribe(
      (res:any) => {this.provincia=(res);
        console.log(this.provincia);
      
      }

        
    );
  }

}

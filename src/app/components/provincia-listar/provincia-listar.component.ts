import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/models/provinciaModel';
import { ProvinciasService } from 'src/app/services/provincias.service';

@Component({
  selector: 'app-provincia-listar',
  templateUrl: './provincia-listar.component.html',
  styleUrls: ['./provincia-listar.component.css']
})
export class ProvinciaListarComponent implements OnInit {

  provincias: Provincia[];

  nuevo: Provincia= {}; //agregar nuevo registro a la tabla

  actual: Provincia = {}; //BD

  id_select:string="1";

  indice:number=0;

  errorNombre = 0;
  errorCapital = 0;
  errorDescripcion = 0;

  errorNombreActualizar = 0;
  errorCapitalActualizar = 0;
  errorFundacionActualizar =0;
  errorDescripcionActualizar = 0;

  
  
  constructor(private provinciasService:ProvinciasService) { 

    this.provincias=[];

    console.log("Provincias listar");

    console.log(this.provincias); // Lo muestra por consola
  }

  seleccionaValor($event:any){


    console.log("Elige: " + this.id_select)

    //Hacemos una busqueda a continuación para buscar el id de nuestra provincia
  
    for(let i=0;i<this.provincias.length;i++){

      if(this.id_select==this.provincias[i].id){
        this.indice=i;
        break;
      }
    }
//busca de la bd los datos 
    this.provinciasService.buscarProvincia(this.id_select).subscribe(
      (res:any)=>{
        console.log(res);
        Object.assign(this.actual,this.provincias[0]);
        //console.log(res.httpErrorResponse.status);
        this.actual = res;
      }
    );

	console.log(this.indice);
  }



//Agregar

agregarProvincia() {
  console.log(this.nuevo);
  this.provinciasService.guardarProvincia(this.nuevo).subscribe(
    (res:any)=>{
      console.log(res);
      //this.usuarios.push(this.nuevo);
      this.ngOnInit();
      console.log(this.provincias);
      
      this.nuevo = {};
      alert('Provincia AGREGADA CON EXITO!')
    });
}

//Eliminar bd

eliminar($event: any) {
  console.log($event.target.value);
  let id: string = $event.target.value; //Guardamos el id del boton
  this.provinciasService.eleminarProvincia(id).subscribe(
    (res: any) => {
        this.ngOnInit();
        console.log(this.provincias);
        alert('Provincia ELIMINADA  CON EXITO!')
    }
  );
}

//ACTUALIZAR


actualizar() {
  console.log("Elige: " + this.id_select);
  console.log(this.provincias);
  this.provinciasService.actualizarProvincia(this.id_select,this.actual).subscribe(
    (res:any)=>{
      console.log(res.text);
      this.ngOnInit();
      alert('Provincia ACTUALIZADA CON EXITO!')
    }
    
  );
}


validarProvincia():Boolean{
  console.log("Validando Provincias del formulario!!!");
  this.errorNombre=this.verificarNombre(this.nuevo.nombre);
  this.errorCapital=this.verificarCapital(this.nuevo.capital);
  this.errorDescripcion= this.verificarDescripcion(this.nuevo.descripcion);
  
  

  if(  (this.errorNombre + this.errorCapital + this.errorDescripcion )>0){
    
    return false;
  }
  return true;
}

private verificarNombre(nombre: any): number {
  const patron =  /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/; //Primer caracter en mayuscular alternando luego
  if (nombre === undefined)
    return 1;
  if (nombre.length > 20)
    return 2;
  if (!patron.test(nombre))
    return 3;
  return 0;
}

private verificarCapital(nombre: any): number {
  const patron = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/; //Primer caracter en mayuscular alternando luego
  if (nombre === undefined)
    return 1;
  if (nombre.length > 30)
    return 2;
  if (!patron.test(nombre))
    return 3;
  return 0;
}

private verificarDescripcion(nombre: any): number {
  const patron =/^[A-Za-záéíóúÁÉÍÓÚ\s\.\,ñÑ]+$/; //Primer caracter en mayuscular alternando luego

  if (nombre === undefined)
    return 1;
  if (nombre.length > 50)
    return 2;
  if (!patron.test(nombre))
    return 3;
  return 0;
}

 limpiarNombre() {
    if (this.errorNombre > 0) {
      console.log("Limpiar nombre");
      this.nuevo.nombre = "";
      this.errorNombre = 0;
    }
  }

  limpiarCapital() {
    if (this.errorCapital > 0) {
      console.log("Limpiar Capital");
      this.nuevo.capital = "";
      this.errorCapital = 0;
    }
  }

  limpiarDescripcion() {
    if (this.errorDescripcion > 0) {
      console.log("Limpiar Descripcion");
      this.nuevo.descripcion = "";
      this.errorDescripcion = 0;
    }
  }
  validarProvinciaActualizar():Boolean{
    console.log("Validando Provincias --Actualizar  -- del formulario!!!");
    this.errorNombreActualizar=this.verificarNombreActualizar(this.actual.nombre);
    this.errorCapitalActualizar=this.verificarCapitalActualizar(this.actual.capital);
    this.errorDescripcionActualizar =this.verificarDescripcionActualizar(this.actual.descripcion);
    
  
    if(  (this.errorNombreActualizar + this.errorCapitalActualizar + this.errorDescripcionActualizar )>0){
      
      return false;
    }
    return true;
  }
  
  private verificarNombreActualizar(nombre: any): number {
    const patron =  /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/; //Primer caracter en mayuscular alternando luego
    if (nombre === undefined)
      return 1;
    if (nombre.length > 20)
      return 2;
    if (!patron.test(nombre))
      return 3;
    return 0;
  }
  
  private verificarCapitalActualizar(nombre: any): number {
    const patron = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/; //Primer caracter en mayuscular alternando luego
    if (nombre === null)
      return 1;
    if (nombre.length > 30)
      return 2;
    if (!patron.test(nombre))
      return 3;
    return 0;
  }

  private verificarDescripcionActualizar(descripcion: any): number {
    const patron =/^[A-Za-záéíóúÁÉÍÓÚ\s\.\,ñÑ]+$/; // Primer caracter en mayúscula, permitir solo letras y espacios
    if (descripcion === undefined || descripcion.trim().length === 0) {
      return 1; // La descripción está vacía o no está definida
    }
    if (descripcion.length > 250) {
      return 2; // La descripción es demasiado larga (más de 50 caracteres)
    }
    if (!patron.test(descripcion)) {
      return 3; // La descripción contiene caracteres inválidos o no cumple con el patrón
    }
    return 0; // No hay errores
  }
  
  

 limpiarNombreActualizar() {
    if (this.errorNombreActualizar > 0) {
      console.log("Limpiar nombre");
      this.actual.nombre = "";
      this.errorNombreActualizar = 0;
    }
  }

  limpiarCapitalActualizar() {
    if (this.errorCapitalActualizar > 0) {
      console.log("Limpiar Capital");
      this.actual.capital = "";
      this.errorCapitalActualizar = 0;
    }
  }

  limpiarDescripcionActualizar() {
    if (this.errorDescripcionActualizar > 0) {
      console.log("Limpiar Descripcion");
      this.actual.descripcion = "";
      this.errorDescripcionActualizar = 0;
    }
  }


  ngOnInit(): void {
    this.provinciasService.listarProvincias().subscribe(
      (res:any) => {
        this.provincias=(res);
        Object.assign(this.actual,this.provincias[0]);
        console.log(this.provincias);}
    );
  }
}

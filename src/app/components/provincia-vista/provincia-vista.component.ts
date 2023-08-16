import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from 'src/app/models/provinciaModel';
import { ProvinciasService } from 'src/app/services/provincias.service';

@Component({
  selector: 'app-provincia-vista',
  templateUrl: './provincia-vista.component.html',
  styleUrls: ['./provincia-vista.component.css']
})
export class ProvinciaVistaComponent implements OnInit {

  titulo:String ="Vista Provincia";

  seleccionMult:any[] = [];


  provincias: Provincia[];

  revelar:boolean=false;

  constructor(private provinciasService:ProvinciasService, 
    private router:Router) {
    
    this.provincias=[];
    console.log(this.titulo);
    
    console.log(this.provincias)


  }
  //Declaro  metodos
 
  procesar():void{
   
    let listaProv:Provincia[]=[];
    
    console.log("Uso de procesar");
    console.log("Capturando el formulario");

    //Por cada elemento de la seleccion buscamos uno a uno en el array de usuarios
    this.seleccionMult.forEach(valorArray => {
      for(let i=0;i<this.provincias.length;i++){
        //si econtramos el id, ponemos el registro usuario en listaUsuarios y pasamos al siguiente id
        if(valorArray==this.provincias[i].id){
          listaProv.push(this.provincias[i]);
          break;
        }
      }
    });
	//Corroboramos que se guardo en lista.	
    console.log(listaProv);

   // this.provinciasService.guardarProvincia(listaProv) //le envio la lista actualizada con los campos seleccionado para que la almacene en el servicio
    
   // this.provinciasService.guardarProvinciaLocal(); //Almaceno prov en el localstorage, las prov, seleccionada

    this.router.navigate(['provincia/listar'])


  }


  addRemoveItem($event:any):void{
    console.log("Capturando el checkbox");
      //Si checked es verdadero agregamos un item al array seleccionMult. Sino, remover 
      if($event.target.checked){
        //push agrega un nuevo elemento al array
        this.seleccionMult.push($event.target.value);
      }
      else{
        //splice quita elementos del array. Recibe splice(inicio, cuantos)
        //indexOf devuelve la posicion en el array del valor pasado por parametro
        this.seleccionMult.splice(this.seleccionMult.indexOf($event.target.value),1);
      }
    //el metodo sort mantiene el orden del array. Es conveniente porque las acciones del usuario no lo son
      this.seleccionMult.sort();
      console.log(this.seleccionMult);
  }

  //Cuando se van a llevar a pantalla
  ngOnInit(): void {
    this.provinciasService.listarProvincias().subscribe(
      (res:any) => {this.provincias=(res);
        console.log(this.provincias);}
    );
  }

}

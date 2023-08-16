import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { Provincia } from "src/app/models/provinciaModel";

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
	
  API_URI = 'http://localhost:3000/provincia';
// https://api.render.com/deploy/srv-chn2gj2k728vrd9kpvhg?key=Nwvgidcewko

// 'http://localhost:3000/provincia';

//https://servidorprovincia.onrender.com/provincia
  provincia: Provincia[];


  constructor(private http: HttpClient) {
    this.provincia= [{
      "id": "1",
      "nombre": "Buenos Aires",
      "capital": "La Plata",
      "imagen": "./assets/media/bsas.jpg",
      "descripcion": "Es la provincia más poblada de Argentina y alberga la capital del país, Buenos Aires. Es conocida por sus playas, sus estancias y sus barrios históricos.",
      "region":"Centro",
      "fundada":"1999",
      
    },
    {
      "id": "2",
      "nombre": "Córdoba",
      "capital": "Córdoba",
      "imagen": "./assets/media/cordoba.jpg",
      "descripcion": "Es una provincia ubicada en el centro del país, conocida por sus paisajes serranos y su historia colonial. Es un destino popular para el turismo interno, especialmente para aquellos que buscan aventuras al aire libre.",
      "region":"Centro",
      "fundada":"1999",
      
    },
    {
      "id": "3",
      "nombre": "Santa Fé",
      "capital": "Santa Fé",
      "imagen": "./assets/media/santafe.jpg",
      "descripcion": "Esta provincia se encuentra en el norte de Argentina, y es la segunda más poblada del país. Cuenta con una amplia variedad de paisajes, desde las playas del río Paraná hasta las llanuras del oeste de la provincia.",
      "region":"Centro",
      "fundada":"1999",
   
    },
    {
      "id": "4",
      "nombre": "Mendoza",
      "capital": "Mendoza",
      "imagen": "./assets/media/mendoza.jpg",
      "descripcion": "Es una provincia ubicada en el oeste de Argentina, conocida por sus viñedos y sus paisajes de montañas. Es un destino popular para el turismo enológico, y también es una base popular para aquellos que desean explorar los Andes.",
      "region":"Cuyo",
      "fundada":"1999",

    },
    {
      "id": "5",
      "nombre": "Túcuman",
      "capital": "Túcuman",
      "imagen": "./assets/media/tucuman.jpg",
      "descripcion": "Esta provincia se encuentra en el noroeste de Argentina, y es conocida por su historia colonial y sus paisajes de montañas. Es el hogar de las ruinas de Quilmes, un importante sitio arqueológico que data de la época precolombina.",
      "region":"NOA",
      "fundada":"1999",
  
    },
    {
      "id": "6",
      "nombre": "Salta",
      "capital": "Salta",
      "imagen": "./assets/media/salta.jpg",
      "descripcion": "Esta provincia se encuentra en el noroeste de Argentina, y es conocida por su historia colonial y sus paisajes de montañas. Es el hogar de las ruinas de Quilmes, un importante sitio arqueológico que data de la época precolombina.",
      "region":"NOA",
      "fundada":"1999",
   
    },
    {
      "id": "7",
      "nombre": "San Juan",
      "capital": "San Juan",
      "imagen": "./assets/media/sanJuan.jpg",
      "descripcion": "Esta provincia se encuentra en el noroeste de Argentina, y es conocida por su historia colonial y sus paisajes de montañas. Es el hogar de las ruinas de Quilmes, un importante sitio arqueológico que data de la época precolombina.",
      "region":"Cuyo",
      "fundada":"1999",
   
    },
  
    {
      "id": "8",
      "nombre": "San Luis",
      "capital": "San Luis",
      "imagen": "./assets/media/sanLuis.jpg",
      "descripcion": "Esta provincia se encuentra en el noroeste de Argentina, y es conocida por su historia colonial y sus paisajes de montañas. Es el hogar de las ruinas de Quilmes, un importante sitio arqueológico que data de la época precolombina.",
      "region":"Cuyo",
      "fundada":"1999",
    
    }

  ]}


  //Metodos

  listarProvincias(){
    
    return this.http.get(`${this.API_URI}/list`);
   
  }

  buscarProvincia(id: string) {
    return this.http.get(`${this.API_URI}/find/${id}`);
  }
  
  guardarProvincia(provincia: Provincia){
    return this.http.post(`${this.API_URI}/add`,provincia);
  }
  
  actualizarProvincia(id:string, actualizaProvincia: Provincia){
    return this.http.put(`${this.API_URI}/update/${id}`,actualizaProvincia);
  }
  
  eleminarProvincia(id:string){
    return this.http.delete(`${this.API_URI}/delete/${id}`);
  }
	

  
  }


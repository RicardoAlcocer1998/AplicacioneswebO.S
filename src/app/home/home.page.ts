import { Component } from '@angular/core';
//import axios from 'axios';
import firebase from 'firebase/app'; 
import'firebase/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  direccion:any;
  ciudad:any;
  colonia:any;
  nombre:any;
  apellido:any;

  constructor() {}
  async guardarFormulario(){
    const databaseRef = firebase.database().ref('/formulario');
    const datos = {
      direccion: this.direccion,
      nombre: this.nombre,
      ciudad: this.ciudad,
      colonia: this.colonia,
      apellido:this.apellido,
    }
    databaseRef.child(this.nombre).set(datos).then(()=>{
    console.log("Subido Exitosamente!");
  });
    async MandarMnesaje(titulo:String, mensaje:string){
      const alerta= await this.alertController.create({
        //titulo
        //cuerpo
        //botones
        header:titulo,
        message:mensaje,
        buttons:['cerrar'],
      });

    }
  }
}

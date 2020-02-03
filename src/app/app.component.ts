import { Contacto } from './models/contacto';
import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators }  from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    
    selectedContacto : Contacto = new Contacto();
    
  contactosArray: Contacto[] = [
    {id:1,nombre:"juan",apellido:"juan",celular:22,email:"sebastianbatalla@gmail.com"},
    {id:2,nombre:"juan",apellido:"juan",celular:22,email:"sebastianbatalla@gmail.com"}
  ];
    formContacto = new FormGroup({
    id:new FormControl('0', Validators.required) ,
    nombre: new FormControl('Nombre', Validators.required),
    apellido: new FormControl('Apellido', Validators.required),
    celular: new FormControl('Celular', Validators.required),
    email: new FormControl('Email', Validators.required)
  });
  addOrEdit(){
  }


  habilitar(){
    this.formContacto.controls['id'].enable();
    this.formContacto.controls['nombre'].enable();
    this.formContacto.controls['apellido'].enable();
    this.formContacto.controls['celular'].enable();
    this.formContacto.controls['email'].enable();
  }
  editar(contacto : Contacto){
    this.formContacto.controls['id'].disable();
    this.formContacto.controls['nombre'].disable();
    this.formContacto.controls['apellido'].disable();
    this.formContacto.controls['celular'].disable();
    this.formContacto.controls['email'].disable();
   this.selectedContacto= contacto;
  }
  borrar(){
    if(confirm('Confirmar borrado de '+this.selectedContacto.nombre+' '+this.selectedContacto.apellido+'?')){
      this.contactosArray = this.contactosArray.filter(x => x!=this.selectedContacto);
      this.selectedContacto= new Contacto();
    }
    
  }
}

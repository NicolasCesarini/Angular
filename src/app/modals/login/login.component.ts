import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/entidades/persona';
import { AutenticationService } from 'src/app/servicios/autentication.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup; // el form es una variable
  email = '';
  clave = '';
  //authService: any;

  persona: Persona = new Persona("", "", "", "", "", "", "", "", "");

  // Inyectar en el constructor el formBuilder
  constructor(private ruta: Router, private formBuilder: FormBuilder, private autService: AutenticationService){  // el formBuilder es un alias
    // Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      clave:['',[Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', null);
  }

  // Ahora ponemos los métodos para el formulario
  // Toma el dato del email
  get Email() {
    return this.form.get('email');
  }
  // Toma el dato de la password
  get Clave() {
    return this.form.get('clave');
  }

  
  // Método de validación del password
  get PasswordValid() {
    return this.Clave?.touched && !this.Clave?.valid;
  }
  // Método de validación del email
  get MailValid() {
    return this.Email?.touched && !this.Email?.valid;
  }
 
  limpiar():void{
    this.form.reset();
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
    if (this.form.valid) {
      //console.log(JSON.stringify(this.form.value));
      this.autService.loginPersona(this.form.value).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data));
        // alert("hola" + data.id);
        if (data) {
          alert("Estas logueado");
          this.ruta.navigate(['/dashboard']);
        } else {
          alert(" ACCESO INCORRECTO");
          alert("error al iniciar sesion");
        }

      }, error => {
        alert("Error");
      })

    } else {
      sessionStorage.setItem('currentUser', null);
      alert("Ha ocurrido un error");
    }
    //if (this.form.valid){ 
      // // Llamamos a nuestro servicio para enviar los datos al servidor
      // // También podríamos ejecutar alguna lógica extra
      //alert("Todo salio bien ¡Enviar formuario!")
    //}else{
      // // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      //this.form.markAllAsTouched();
 }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  form: FormGroup; // el form es una variable
  nombre: string = '';
  apellido: string = '';
  edad: string = '';
  imgPerfil: string = '';
  github: string = '';
  linkedin: string = '';
  email: string = '';
  clave: string = '';
  acercade: string = '';

  constructor(private formBuilder: FormBuilder, private sPersona: PersonaService) {  // el formBuilder es un alias
    // Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
      edad:[''],
      imgPerfil:['', [Validators.required]],
      github:[''],
      linkedin:[''],
      email:['', [Validators.required]],
      clave:['', [Validators.required]],
      acercade:['', [Validators.required]],
    })
  }

  ngOnInit(): void { //vacio
  }

  //hacer los métodos
  get Nombre(){
    return this.form.get("nombre");
  }

  get Apellido(){
    return this.form.get("apellido");
  }

  //acá podria poner las validaciones
  onCreate(): void{
    const persona = new Persona(this.nombre, this.apellido, this.edad, this.imgPerfil, this.github, this.linkedin, 
      this.email, this.clave, this.acercade);
    this.sPersona.agregarPersona(persona).subscribe(data=>{alert("Persona añadida")
    window.location.reload();
    });
  }

  limpiar():void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
    } else{
      alert("fallo en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
}
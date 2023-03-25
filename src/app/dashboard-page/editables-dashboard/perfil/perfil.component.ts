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
  usuarios: Persona[] = [];
  //nombre: string = '';
  //apellido: string = '';
  //edad: string = '';
  //imgPerfil: string = '';
  //github: string = '';
  //linkedin: string = '';
  //email: string = '';
  //clave: string = '';
  //acercade: string = '';

  constructor(private formBuilder: FormBuilder, private sPersona: PersonaService) {  // el formBuilder es un alias
    // Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      id: [''],
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
      edad:[''],
      imgPerfil:['', [Validators.required]],
      imgBanner:['', [Validators.required]],
      linkCV:['', [Validators.required]],
      email:['', [Validators.required]],
      clave:['', [Validators.required]],
      acercaDe:['', [Validators.required]],
    })
  }

  ngOnInit(): void { //vacio
    this.cargarDetalle(1);
    this.form.reset();
  }

  cargarPersona(): void {
    this.sPersona.verPersonas().subscribe(
      data => {
        this.usuarios = data;
      }
    )
  }

  cargarDetalle(id: 1) {
    this.sPersona.verPersona(id).subscribe(
      {
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('completar aquí')
      }
    )
  }


  guardar() {


    let persona = this.form.value;

    this.sPersona.updatePersona(persona.id, persona).subscribe(
      data => {
        alert('Persona editada correctamente');
        this.cargarPersona();
        this.form.reset();
      },
      error => {
        alert('Persona editada correctamente');
        this.cargarPersona();
        this.form.reset();
      }
    )
  }
}
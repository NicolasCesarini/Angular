import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  form: FormGroup; // el form es una variable
  experiencias: Experiencia[] = [];
  //imgExperiencia: string = '';
  //puesto: string = '';
  //anio: string = '';
  //descripcionTrabajo: string = '';
   

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private sExperiencia: ExperienciaService){  // el formBuilder es un alias
    // Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      id: [''],
      imgExperiencia:[''],
      empresa:['', [Validators.required]],
      puesto:['', [Validators.required]],
      anio:[''],
      descripcionTrabajo:['', [Validators.required]],
    })
  }

  ngOnInit(): void { //vacio
    this.cargarExperiencia();
    this.form.reset();
  }

  cargarExperiencia(): void {
    this.sExperiencia.verExperiencias().subscribe(
      data => {
        this.experiencias = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.sExperiencia.verExperiencia(id).subscribe(
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
    
    
    let experiencia = this.form.value;

    if (experiencia.id == '') {
      this.sExperiencia.agregarExperiencia(experiencia).subscribe(
        data => {
          alert("Su nueva Experiencia fue añadida correctamente");
          this.cargarExperiencia();
          this.form.reset();
        },
        error => {
          alert("Su nueva Experiencia fue añadida correctamente");
          this.cargarExperiencia();
          this.form.reset();
          
        }
      )
    } else {
      this.sExperiencia.updateExperiencia(experiencia.id, experiencia).subscribe(
        data => {
          alert('Experiencia editada correctamente');
          this.cargarExperiencia();
          this.form.reset();
        },
        error => {
          alert('Experiencia editada correctamente');
          this.cargarExperiencia();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.sExperiencia.borrarExperiencia(id).subscribe(
      data => {
        alert("se pudo eliminar satisfactoriamente");
        this.cargarExperiencia();
        this.form.reset();
      },
      error => {
        alert("se pudo eliminar satisfactoriamente");
        this.cargarExperiencia();
        this.form.reset();
      }
    )
  }




}

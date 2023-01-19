import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudio } from 'src/app/entidades/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})

export class EstudioComponent implements OnInit {

  form: FormGroup; // el form es una variable
  estudios: Estudio[] = [];
  //imgCurso: string = '';
  //tituloCurso: string = '';
  //anio: string = '';

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private sEstudio: EstudioService){  // el formBuilder es un alias
    // Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      id: [''],
      imgCurso:[''],
      tituloCurso:['', [Validators.required]],
      anio:[''],
    })
  }

  //this.ngOnInit()

  ngOnInit(): void { //vacio
    this.cargarEducacion();
    this.form.reset();
  }

  cargarEducacion(): void {
    this.sEstudio.verEducacion().subscribe(
      data => {
        this.estudios = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.sEstudio.verEstudio(id).subscribe(
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
    
    
    let estudio = this.form.value;

    if (estudio.id == '') {
      this.sEstudio.agregarEducacion(estudio).subscribe(
        data => {
          alert("Su nueva Educación fue añadida correctamente");
          this.cargarEducacion();
          this.form.reset();
        },
        error => {
          alert("Su nueva Educación fue añadida correctamente");
          this.cargarEducacion();
          this.form.reset();
          
        }
      )
    } else {
      this.sEstudio.updateEducacion(estudio.id, estudio).subscribe(
        data => {
          alert('Educación editada correctamente');
          this.cargarEducacion();
          this.form.reset();
        },
        error => {
          alert('Educación editada correctamente');
          this.cargarEducacion();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.sEstudio.borrarEducacion(id).subscribe(
      data => {
        alert("se pudo eliminar satisfactoriamente");
        this.cargarEducacion();
        this.form.reset();
      },
      error => {
        alert("se pudo eliminar satisfactoriamente");
        this.cargarEducacion();
        this.form.reset();
      }
    )
  }




}
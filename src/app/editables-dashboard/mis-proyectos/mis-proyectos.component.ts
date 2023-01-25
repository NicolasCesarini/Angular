import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/entidades/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})
export class MisProyectosComponent implements OnInit {

form: FormGroup; // el form es una variable
proyectos: Proyecto[] = [];
//imgExperiencia: string = '';
//puesto: string = '';
//anio: string = '';
//descripcionTrabajo: string = '';
 

// Inyectar en el constructor el formBuilder
constructor(private formBuilder: FormBuilder, private sProyecto: ProyectoService){  // el formBuilder es un alias
  // Creamos el grupo de controles para el formulario de login
  this.form= this.formBuilder.group({
    id: [''],
    imgProyecto:[''],
    institucion:[''],
    nombreProyecto:['', [Validators.required]],
    anio:[''],
    descripcionProyecto:['', [Validators.required]],
  })
}

ngOnInit(): void { //vacio
  this.cargarProyecto();
  this.form.reset();
}

cargarProyecto(): void {
  this.sProyecto.verProyectos().subscribe(
    data => {
      this.proyectos = data;
    }
  )
}

cargarDetalle(id: number) {
  this.sProyecto.verProyecto(id).subscribe(
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
  
  
  let proyecto = this.form.value;

  if (proyecto.id == '') {
    this.sProyecto.agregarProyecto(proyecto).subscribe(
      data => {
        alert("Su nuevo Proyecto fue añadido correctamente");
        this.cargarProyecto();
        this.form.reset();
      },
      error => {
        alert("Su nuevo Proyecto fue añadido correctamente");
        this.cargarProyecto();
        this.form.reset();
        
      }
    )
  } else {
    this.sProyecto.updateProyecto(proyecto.id, proyecto).subscribe(
      data => {
        alert('Proyecto editado correctamente');
        this.cargarProyecto();
        this.form.reset();
      },
      error => {
        alert('Proyecto editado correctamente');
        this.cargarProyecto();
        this.form.reset();
      }
    )
  }
}

borrar(id: number) {
  this.sProyecto.borrarProyecto(id).subscribe(
    data => {
      alert("se pudo eliminar satisfactoriamente");
      this.cargarProyecto();
      this.form.reset();
    },
    error => {
      alert("se pudo eliminar satisfactoriamente");
      this.cargarProyecto();
      this.form.reset();
    }
  )
}
}


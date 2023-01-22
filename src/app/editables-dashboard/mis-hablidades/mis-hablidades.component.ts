import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/entidades/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-mis-hablidades',
  templateUrl: './mis-hablidades.component.html',
  styleUrls: ['./mis-hablidades.component.css']
})

export class MisHablidadesComponent implements OnInit {

  form: FormGroup; // el form es una variable
  habilidades: Habilidad[] = [];  

// Inyectar en el constructor el formBuilder
constructor(private formBuilder: FormBuilder, private sHabilidad: HabilidadService){  // el formBuilder es un alias
  // Creamos el grupo de controles para el formulario de login
  this.form= this.formBuilder.group({
    nombre:[''],
    porcentaje:['', [Validators.required]],
  })
}

ngOnInit(): void { //vacio
  this.cargarHabilidad();
  this.form.reset();
}

cargarHabilidad(): void {
  this.sHabilidad.verHabilidades().subscribe(
    data => {
      this.habilidades = data;
    }
  )
}

cargarDetalle(id: number) {
  this.sHabilidad.verHabilidad(id).subscribe(
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
  
  
  let habilidad = this.form.value;

  if (habilidad.id == '') {
    this.sHabilidad.agregarHabilidad(habilidad).subscribe(
      data => {
        alert("Su nueva Habilidad fue añadida correctamente");
        this.cargarHabilidad();
        this.form.reset();
      },
      error => {
        alert("Su nueva Habilidad fue añadida correctamente");
        this.cargarHabilidad();
        this.form.reset();
        
      }
    )
  } else {
    this.sHabilidad.updateHabilidad(habilidad.id, habilidad).subscribe(
      data => {
        alert('Habilidad editada correctamente');
        this.cargarHabilidad();
        this.form.reset();
      },
      error => {
        alert('Habilidad editada correctamente');
        this.cargarHabilidad();
        this.form.reset();
      }
    )
  }
}

borrar(id: number) {
  this.sHabilidad.borrarHabilidad(id).subscribe(
    data => {
      alert("se pudo eliminar satisfactoriamente");
      this.cargarHabilidad();
      this.form.reset();
    },
    error => {
      alert("se pudo eliminar satisfactoriamente");
      this.cargarHabilidad();
      this.form.reset();
    }
  )
}
}

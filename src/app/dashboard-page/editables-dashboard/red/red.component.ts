import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Redes } from 'src/app/entidades/redes';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})

export class RedComponent implements OnInit {

  form :FormGroup; // el form es una variable
  redes: Redes[] = [];

// Inyectar en el constructor el formBuilder
constructor(private formBuilder: FormBuilder, private sRedes: RedesService){  // el formBuilder es un alias
  // Creamos el grupo de controles para el formulario de login
  this.form= this.formBuilder.group({
    id: [''],
    red:['', [Validators.required]],
    link:['', [Validators.required]],
  })
}

ngOnInit(): void { //vacio
  this.cargarRed();
  this.form.reset();
}

cargarRed(): void {
  this.sRedes.verRedes().subscribe(
    data => {
      this.redes = data;
    }
  )
}

cargarDetalle(id: number) {
  this.sRedes.verRed(id).subscribe(
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
  
  
  let red = this.form.value;

  if (red.id == '') {
    this.sRedes.agregarRed(red).subscribe(
      data => {
        alert("Su nueva Red fue añadida correctamente");
        this.cargarRed();
        this.form.reset();
      },
      error => {
        alert("Su nueva Red fue añadida correctamente");
        this.cargarRed();
        this.form.reset();
        
      }
    )
  } else {
    this.sRedes.updateRed(red.id, red).subscribe(
      data => {
        alert('Red editada correctamente');
        this.cargarRed();
        this.form.reset();
      },
      error => {
        alert('Red editada correctamente');
        this.cargarRed();
        this.form.reset();
      }
    )
  }
}

borrar(id: number) {
  this.sRedes.borrarRed(id).subscribe(
    data => {
      alert("se pudo eliminar satisfactoriamente");
      this.cargarRed();
      this.form.reset();
    },
    error => {
      alert("se pudo eliminar satisfactoriamente");
      this.cargarRed();
      this.form.reset();
    }
  )
}
}


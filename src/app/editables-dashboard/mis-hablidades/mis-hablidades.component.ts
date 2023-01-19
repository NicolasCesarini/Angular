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
  nombre: string = '';
  porcentaje: string = '';   

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private sHabilidad: HabilidadService){  // el formBuilder es un alias
    // Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      nombre:[''],
      porcentaje:['', [Validators.required]],
    })
  }

  ngOnInit(): void { //vacio
  }

  //hacer los métodos
  get Nombre(){
    return this.form.get("nombre");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  //acá podria poner las validaciones
  onCreate(): void{
    const habilidad = new Habilidad(this.nombre, this.porcentaje);
    this.sHabilidad.agregarHabilidad(habilidad).subscribe(data=>{alert("Experiencia añadida")
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

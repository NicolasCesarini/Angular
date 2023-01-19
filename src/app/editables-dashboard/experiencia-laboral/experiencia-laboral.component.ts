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
  imgExperiencia: string = '';
  puesto: string = '';
  anio: string = '';
  descripcionTrabajo: string = '';
   

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private sExperiencia: ExperienciaService){  // el formBuilder es un alias
    // Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      imgExperiencia:[''],
      puesto:['', [Validators.required]],
      anio:[''],
      descripcionTrabajo:[''],
    })
  }

  ngOnInit(): void { //vacio
  }

  //hacer los métodos
  get Puesto(){
    return this.form.get("puesto");
  }

  get Descripcion(){
    return this.form.get("descripcionTrabajo");
  }

  //acá podria poner las validaciones
  onCreate(): void{
    const experiencia = new Experiencia(this.imgExperiencia, this.puesto, this.anio, this.descripcionTrabajo);
    this.sExperiencia.agregarExperiencia(experiencia).subscribe(data=>{alert("Experiencia añadida")
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

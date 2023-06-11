import { Component } from '@angular/core';
import { CloudinaryService } from 'src/app/services/cloudinary.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-receta-form',
  templateUrl: './receta-form.component.html',
  styleUrls: ['./receta-form.component.css']
})
export class RecetaFormComponent {

  imagen: File|undefined;
  form: FormGroup;


  constructor(private _cloudinaryService:CloudinaryService, private _fb:FormBuilder){
    this.form = new FormGroup({});
    this.crearForm();
  }

  crearForm(){
    this.form = this._fb.group({
      nombre: ['',[Validators.required, Validators.minLength(0)]],
      duracion: [0,[Validators.required, Validators.min(0)]],
      dificultad: ['',[Validators.required]],
      tipo: ['',[Validators.required, Validators.minLength(0)]],
      origen: ['',[Validators.required, Validators.minLength(0)]],
      pasos: ['',[Validators.required, Validators.minLength(0)]],
      foto: ['',[Validators.required]],
    });
  }

  imagenSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imagen = input.files[0];
    }
  }

  subirImagen() {
    if(this.imagen){
      const data = new FormData();
      data.append('file', this.imagen);
      data.append('upload_preset', 'angular_espatula');
      data.append('cloud_name', 'de411te3t');
      this._cloudinaryService.cargarImagen(data)
      .subscribe(
        respuesta=>{
          if(respuesta){
            console.log(respuesta)
          }
        }
      );

    }else{
      alert('Seleccione primero la imagen que desea subir');
    }
  }

  get nombreNoValido(){
    return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched;
  }

  guardarReceta(){
  }
}

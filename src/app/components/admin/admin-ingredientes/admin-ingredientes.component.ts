import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingrediente, IngredienteService } from 'src/app/services/ingrediente.service';

@Component({
  selector: 'app-admin-ingredientes',
  templateUrl: './admin-ingredientes.component.html',
  styleUrls: ['./admin-ingredientes.component.css']
})
export class AdminIngredientesComponent {
  ingredientes:Ingrediente[]=[]
  ingredienteNew:Ingrediente ={
    gluten:false
  };
  ingredienteAEditar:Ingrediente ={};

  constructor(private _ingreService:IngredienteService){
  }

  ngOnInit(): void {
    this.actualizarTabla();
  }

  actualizarTabla(){
    this._ingreService.getIngredientes().subscribe(
      (response)=>{
        this.ingredientes=response;
      }
    );
  }

  buscarIngredienteAEditar(id:number){
    let ingredienteEditar = this.ingredientes.find(objeto => objeto.id === id);
    if(ingredienteEditar){
      this.ingredienteAEditar=ingredienteEditar;
    }
  }

  saveIngrediente(form: NgForm){
    if (form.valid) {
      console.log(this.ingredienteNew);
      this._ingreService.createIngrediente(this.ingredienteNew).subscribe(
        (response)=>{
          console.log(response);
          window.location.reload();
        }
      );
      
    }else{
      console.log('problema');
    }
  }

  editarIngrediente(form: NgForm){
    if (form.valid) {
      console.log(this.ingredienteAEditar);
      this._ingreService.putIngrediente(this.ingredienteAEditar.id!, this.ingredienteAEditar).subscribe(
        (response)=>{
          console.log(response);
          window.location.reload();
        }
      );
      
    }else{
      console.log('paso algo')
    }
  }

  eliminarIngrediente(id:number){
    this._ingreService.removeIngrediente(id).subscribe(
      (response)=>{
        console.log(response);
        this.actualizarTabla();
      }
    );
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Receta, RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-admin-recetas',
  templateUrl: './admin-recetas.component.html',
  styleUrls: ['./admin-recetas.component.css']
})
export class AdminRecetasComponent {

  recetas:Receta[]=[];

  constructor(private _receService:RecetaService, private _router:Router){
  }

  ngOnInit(): void {
    this.actualizarTabla();
  }

  actualizarTabla(){
    this._receService.getRecetas().subscribe(
      (response)=>{
        this.recetas=response;
      }
    );
  }

  verReceta(id:number){
    this._router.navigate(['/receta', id]);
  }

  recetaAEditar(id:number){
    this._router.navigate(['/editReceta', id]);
  }

  eliminarReceta(id:number){
    this._receService.removeReceta(id).subscribe(
      (response)=>{
        console.log(response);
        this.actualizarTabla();
      }
    );
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecetaService, Receta } from 'src/app/services/receta.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit{
  recetas:Receta[]=[];
  pagina!:number;

  constructor(private _recetaService:RecetaService, private _router:Router){}

  ngOnInit(){
    this.getRecetas();
  }

  public getRecetas():void{
    this._recetaService.getRecetas().subscribe(
      (respuesta: Receta[]) => {
        this.recetas = respuesta;
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }

  verReceta(i:number){
    this._router.navigate(['/receta',i]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receta, RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-buscador-receta',
  templateUrl: './buscador-receta.component.html',
  styleUrls: ['./buscador-receta.component.css']
})
export class BuscadorRecetaComponent implements OnInit {

  recetas:Receta[] = [];
  termino:string|undefined;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router,
    private _receService:RecetaService){
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      this._receService.getRecetas().subscribe(
        (respuesta)=>{
          this.recetas= this._receService.buscarRecetas(params['busqueda'], respuesta);
          this.termino = params['busqueda']
        });
    });
  }

  verReceta(i:number){
    this._router.navigate(['/receta',i]);
  }

}

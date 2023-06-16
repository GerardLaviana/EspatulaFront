import { Injectable } from '@angular/core';
import { Usuario } from './usuario.service';
import { Ingrediente } from './ingrediente.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from './comentario.service';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  
  private apiRecetaUrl = 'http://localhost:8095/receta';

  constructor(private _http: HttpClient) { }

  getRecetas():Observable<Receta[]>{
    return this._http.get<Receta[]>(`${this.apiRecetaUrl}/getAll`);
  }

  getReceta(id: number):Observable<Receta>{
    return this._http.get<Receta>(`${this.apiRecetaUrl}/${id}`);
  }

  createReceta(nuevaReceta: Receta):Observable<Receta>{
    return this._http.post<Receta>(`${this.apiRecetaUrl}/new`, nuevaReceta);
  }

  removeReceta(id:number):Observable<void>{
    return this._http.delete<void>(`${this.apiRecetaUrl}/remove/${id}`);
  }

  putReceta(id:number, updatedReceta:Receta):Observable<Receta>{
    return this._http.put<Receta>(`${this.apiRecetaUrl}/update/${id}`, updatedReceta);
  }

  buscarRecetas(busqueda:string, recetasAct:Receta[]):Usuario[]{
    let recetasAux: Receta[]=[];
    busqueda = busqueda.toLowerCase();
    for(let i = 0; i < recetasAct.length; i++) {
      let receta = recetasAct[i];
      let nombre = receta.nombre!.toLowerCase();
      if (nombre.indexOf(busqueda) >= 0) {
        recetasAux.push(receta);
      }
    }
    return recetasAux;
  }

  tieneGluten(receta: Receta):boolean{
    for (let i = 0; i < receta.ingredientes!.length; i++) {
      if (receta.ingredientes![i].ingrediente?.gluten === true) {
        return true;
      }
    }
    return false;
  }
}

export interface Receta{
  id?:number,
  nombre?:string,
  duracion?:number,
  fecha?:string,
  instrucciones?:string,
  origen?:string,
  tipo?:string,
  valoracion?:number,
  dificultad?:string,
  urlImagen?:string,
  comentarios?:Comentario[],
  usuario?:Usuario,
  ingredientes?:IngredienteConCantidad[]
}

export interface IngredienteConCantidad {
  id?:number,
  ingrediente?: Ingrediente;
  cantidad?:number,
  unidadMedida?:string,
  nombre?: string
}
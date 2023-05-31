import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  constructor() { }
}

export interface Ingrediente{
  id?:number,
  nombre:string,
  tipo: string,
  gluten: boolean
}

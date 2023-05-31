import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
}

export interface Usuario{
  id?:number,
  username:string,
  password:string,
  email:string,
  roles?: Rol[]
}

export interface Rol{
  id?:number,
  nombre:string
}


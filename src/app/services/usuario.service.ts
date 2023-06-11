import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUsuarioUrl = 'http://localhost:8095/usuario';

  constructor(private _http: HttpClient) { }

  getUsuarios():Observable<Usuario[]>{
    return this._http.get<Usuario[]>(`${this.apiUsuarioUrl}/getAll`);
  }

  getUsuario(id: number):Observable<Usuario>{
    return this._http.get<Usuario>(`${this.apiUsuarioUrl}/${id}`);
  }

  createUsuario(nuevoUsuario: Usuario):Observable<Usuario>{
    return this._http.post<Usuario>(`${this.apiUsuarioUrl}/new`, nuevoUsuario);
  }

  removeUsuario(id:number):Observable<void>{
    return this._http.delete<void>(`${this.apiUsuarioUrl}/remove/${id}`);
  }

  putUsuario(id:number, updatedUsuario:Usuario):Observable<Usuario>{
    return this._http.put<Usuario>(`${this.apiUsuarioUrl}/update/${id}`, updatedUsuario);
  }
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


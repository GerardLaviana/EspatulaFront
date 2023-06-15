import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioDTO, ComentarioService } from 'src/app/services/comentario.service';
import { Receta, RecetaService } from 'src/app/services/receta.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit{

  receta: Receta = {};
  newComen: ComentarioDTO = {};
  mensajeNuevo:string="";
  roles: string[]=[];
  isLogged = false;
  isAdmin: boolean = false;
  isCreadorReceta: boolean = false;
  isCreadorComentario: boolean = false;
  selectedUp: boolean = false;
  selectedDown: boolean = false;

  constructor(private _tokenService: TokenService, private _activatedRoute: ActivatedRoute, private _router: Router,
    private _receService:RecetaService, private _comenService:ComentarioService){}

  ngOnInit(){
    this._activatedRoute.params.subscribe(params =>{
      this._receService.getReceta(params['id']).subscribe(
        (respuesta)=>{
          this.receta = respuesta;
          if(this._tokenService.getUserName()===respuesta.usuario?.username)
            this.isCreadorReceta=true;
          console.log(respuesta);
          console.log(this.isCreadorReceta);
        });
    });
    
    if (this._tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
    this.roles = this._tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === "ROLE_ADMIN"){
        this.isAdmin=true;
      }
    });
  }

  upvote(){
    console.log('suma');
    if(this.selectedDown){
      this.selectedUp=true;
      this.selectedDown=false;
      this.receta.valoracion=this.receta.valoracion!+2;
      this._receService.putReceta(this.receta.id!, this.receta).subscribe(
        (response)=>{
          console.log(response);
        }
      );
    }else{
      this.selectedUp=true;
      this.receta.valoracion!++;
      this._receService.putReceta(this.receta.id!, this.receta).subscribe(
        (response)=>{
          console.log(response);
        }
      );
    }
  }

  downvote(){
    console.log('resta');
    if(this.selectedUp){
      this.selectedUp=false;
      this.selectedDown=true;
      this.receta.valoracion=this.receta.valoracion!-2;
      this._receService.putReceta(this.receta.id!, this.receta).subscribe(
        (response)=>{
          console.log(response);
        }
      );
    }else{
      this.selectedDown=true;
      this.receta.valoracion!--;
      this._receService.putReceta(this.receta.id!, this.receta).subscribe(
        (response)=>{
          console.log(response);
        }
      );
    }
  }

  recetaAEditar(id:number){
    this._router.navigate(['/editReceta', id]);
  }

  eliminarReceta(id:number){
    this._receService.removeReceta(id).subscribe(
      (response)=>{
        console.log(response);
        this._router.navigate(['/home']);
      }
    );
  }

  addComentario(){
    if(this.mensajeNuevo){
      this.newComen.mensaje = this.mensajeNuevo;
      this.newComen.idReceta = this.receta.id;
      this.newComen.username = this._tokenService.getUserName()!;
      console.log(this.newComen);
      
      this._comenService.createComentario(this.newComen).subscribe(
        (response)=>{
          console.log(response);
          window.location.reload();
        }
      );
    }
  }

  checkAuthor(usernameCreador:string): boolean{
    let usuLogged = this._tokenService.getUserName();
    if(usuLogged === usernameCreador || this.isAdmin){
      return true;
    }else{
      return false;
    }
  }

  eliminarComentario(id:number){
    this._comenService.removeComentario(id).subscribe(
      (response)=>{
        console.log(response);
        window.location.reload();
      }
    );
  }
}

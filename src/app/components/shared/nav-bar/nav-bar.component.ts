import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta, RecetaService } from 'src/app/services/receta.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  body = document.getElementsByTagName("body")[0];
  isLogged = false;
  roles: string[]=[];
  isAdmin: boolean=false;
  username:string|null ="";

  constructor(private _router: Router, private _tokenService: TokenService, private _recetaService: RecetaService){}

  ngOnInit() {
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
    this.username=this._tokenService.getUserName();
  }

  cambiarTema() {
      this.body.classList.toggle("claro");
      this.body.classList.toggle("oscuro");
  }

  aparece(id:string) {
    let desple = document.getElementById(id);
    if (desple != null){
      if(desple.style.display==="flex"){
          desple.style.display="none"
      }else{
          desple.style.display="flex";
      }
    }
  }

  buscarReceta(busqueda:string){
    this._router.navigate(['/search',busqueda]);
  }

  recetaRamdom(){
    let maxRec:number;
    this._recetaService.getRecetas().subscribe(
      (respuesta: Receta[]) => {
        maxRec = respuesta.length;
        let numR:number = Math.round(Math.random()*(maxRec-1)+1);
        this._router.navigate(['/receta', numR]);
      }
    );
  }

  crearReceta(){
    this._router.navigate(['/newReceta']);
  }

  onLogOut(): void {
    this._tokenService.logOut();
    window.location.reload();
  }

}

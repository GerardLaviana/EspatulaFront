import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit{

  roles: string[]=[];
  isAdmin: boolean=false;

  constructor(private _tokenService: TokenService){}

  ngOnInit(){
    //Carga de la receta para su detalle
    this.roles = this._tokenService.getAuthorities(); //ngIF para lo que quieras ocultar
    this.roles.forEach( rol => {
      if(rol === "ROLE_ADMIN"){
        this.isAdmin=true;
      }
    });
  }

}

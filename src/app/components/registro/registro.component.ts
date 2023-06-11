import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario: NuevoUsuario | undefined;
  nombreUsuario: string = "";
  email: string = "";
  password: string = "";
  errMsj: string = "";
  isLogged = false;
  siteKey:string;

  constructor(
    private _tokenService: TokenService,
    private _authService: AuthService,
    private _router: Router
  ) { 
    this.siteKey = "6LeOS3UmAAAAAFaxim-B3LNw1ifyg1BHsCp1oL58";
  }

  ngOnInit() {
    if (this._tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombreUsuario, this.email, this.password);
    this._authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        /**this.toastr.success('Cuenta Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });*/

        this._router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        /**this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });*/
        console.log(err.error.message);
      }
    );
  }
}

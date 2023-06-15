import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  siteKey:string;
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario | undefined;
  username: string = "";
  password: string = "";
  roles: string[] = [];
  errMsj: string = "";

  constructor(
    private _tokenService:TokenService,
    private _authService:AuthService,
    private _router:Router,
    ){
    this.siteKey = "6LeOS3UmAAAAAFaxim-B3LNw1ifyg1BHsCp1oL58";
  }

  ngOnInit(): void {
    if(this._tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this._tokenService.getAuthorities();
    }
  }

  onLogin():void {
    console.log(this.username);
    console.log(this.password)
    this.loginUsuario = new LoginUsuario(this.username, this.password);
    this._authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;

        this._tokenService.setToken(data.token);
        this._tokenService.setUserName(data.username);
        this._tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        window.location.reload();
      },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.message;
        console.log(err.error.message);
      }
    )
  }

  mostrarRespuesta(i:string) {
    let respuesta = document.getElementById(i);
    if(respuesta!.style.display==="block"){
        respuesta!.style.display="none"
    }else{
        respuesta!.style.display="block";
    }
  }
}

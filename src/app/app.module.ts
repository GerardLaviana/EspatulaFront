import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetaCardComponent } from './components/shared/receta-card/receta-card.component';
import { RecetaComponent } from './components/receta/receta.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecetaFormComponent } from './components/receta-form/receta-form.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { interceptorProvider } from './services/interceptor.service';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetaCardComponent,
    RecetaComponent,
    RecetasComponent,
    NavBarComponent,
    RecetaFormComponent,
    LoginComponent,
    RegistroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

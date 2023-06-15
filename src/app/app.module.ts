import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetaCardComponent } from './components/shared/receta-card/receta-card.component';
import { RecetaComponent } from './components/receta/receta.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { RecetaFormComponent } from './components/receta-form/receta-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { interceptorProvider } from './services/interceptor.service';
import { AdminRecetasComponent } from './components/admin/admin-recetas/admin-recetas.component';
import { AdminUsuariosComponent } from './components/admin/admin-usuarios/admin-usuarios.component';
import { AdminIngredientesComponent } from './components/admin/admin-ingredientes/admin-ingredientes.component';
import { RecetaEditComponent } from './components/receta-edit/receta-edit.component';
import { BuscadorRecetaComponent } from './components/buscador-receta/buscador-receta.component';

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
    FooterComponent,
    AdminRecetasComponent,
    AdminUsuariosComponent,
    AdminIngredientesComponent,
    RecetaEditComponent,
    BuscadorRecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule,
    NgxPaginationModule,
    NgxDropzoneModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './components/recetas/recetas.component';
import { RecetaComponent } from './components/receta/receta.component';
import { RecetaFormComponent } from './components/receta-form/receta-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GuardService as guard } from './services/guard.service';

const routes: Routes = [
  {path:"home", component:RecetasComponent},
  {path:"receta/:id", component:RecetaComponent},
  {path:"newReceta", component:RecetaFormComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
  {path:"login", component:LoginComponent},
  {path:"registro", component:RegistroComponent},
  //{path:"buscar/:busqueda", component:BuscadorComponent},
  {path:"**", pathMatch:"full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

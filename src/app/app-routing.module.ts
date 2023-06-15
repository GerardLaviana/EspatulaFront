import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './components/recetas/recetas.component';
import { RecetaComponent } from './components/receta/receta.component';
import { RecetaFormComponent } from './components/receta-form/receta-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GuardService as guard } from './services/guard.service';
import { AdminRecetasComponent } from './components/admin/admin-recetas/admin-recetas.component';
import { AdminIngredientesComponent } from './components/admin/admin-ingredientes/admin-ingredientes.component';
import { AdminUsuariosComponent } from './components/admin/admin-usuarios/admin-usuarios.component';
import { RecetaEditComponent } from './components/receta-edit/receta-edit.component';
import { BuscadorRecetaComponent } from './components/buscador-receta/buscador-receta.component';

const routes: Routes = [
  {path:"home", component:RecetasComponent},
  {path:"receta/:id", component:RecetaComponent},
  {path:"newReceta", component:RecetaFormComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
  {path:"editReceta/:id", component:RecetaEditComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
  {path:"login", component:LoginComponent},
  {path:"registro", component:RegistroComponent},
  {path:"admin-recetas", component:AdminRecetasComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
  {path:"admin-ingredientes", component: AdminIngredientesComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
  {path:"admin-usuarios", component:AdminUsuariosComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
  {path:"search/:busqueda", component:BuscadorRecetaComponent},
  {path:"**", pathMatch:"full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

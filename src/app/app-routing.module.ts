import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form/usuario-form.component';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
const routes: Routes = [
  { path:'home',  component:HomeComponent},
  { path:'usuarios',  component:UsuariosComponent},
  { path:'usuario/:id',  component:UsuarioComponent},
  { path:'usuarios/form',  component:UsuarioFormComponent},
  { path:'usuarios/form/:id',  component:UsuarioFormComponent},
  { path:'about',  component:AboutComponent}, 

  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'**', component:AboutComponent},//-->Componente Nuevo: Error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


//Componente Principal
import { AppComponent } from './app.component'; 
//Mis Componentes
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UploadFilesComponent } from './components/shared/upload-files/upload-files.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';
import { UsuarioTarjetaComponent } from './components/usuarios/usuario-tarjeta/usuario-tarjeta.component';
import { RegisterComponent } from './components/usuarios/register/register.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form/usuario-form.component';
import { LoginComponent } from './components/usuarios/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UploadFilesComponent,
    AboutComponent,
    BuscadorComponent,
    UsuariosComponent,    
    UsuarioComponent,
    UsuarioTarjetaComponent,
    RegisterComponent,
    UsuarioFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

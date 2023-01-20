import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { RedesComponent } from './redes/redes.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { LoginComponent } from './modals/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { BotonLoginComponent } from './boton-login/boton-login.component';
import { BotonLogoutComponent } from './boton-logout/boton-logout.component';
import { BotonesDashboardComponent } from './botones-dashboard/botones-dashboard.component';
import { PerfilComponent } from './editables-dashboard/perfil/perfil.component';
import { ExperienciaLaboralComponent } from './editables-dashboard/experiencia-laboral/experiencia-laboral.component';
import { EstudioComponent } from './editables-dashboard/estudio/estudio.component';
import { MisHablidadesComponent } from './editables-dashboard/mis-hablidades/mis-hablidades.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from './servicios/persona.service';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    RedesComponent,
    SobreMiComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent,
    IndexComponent,
    NavbarDashboardComponent,
    BotonLoginComponent,
    BotonLogoutComponent,
    BotonesDashboardComponent,
    PerfilComponent,
    ExperienciaLaboralComponent,
    EstudioComponent,
    MisHablidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PersonaService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

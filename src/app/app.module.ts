import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { LoginComponent } from './modals/login/login.component';
import { DashboardComponent } from './dashboard-page/dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './componentes/index/index.component';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';
import { BotonLogoutComponent } from './componentes/boton-logout/boton-logout.component';
import { BotonesDashboardComponent } from './dashboard-page/botones-dashboard/botones-dashboard.component';
import { PerfilComponent } from './dashboard-page/editables-dashboard/perfil/perfil.component';
import { ExperienciaLaboralComponent } from './dashboard-page/editables-dashboard/experiencia-laboral/experiencia-laboral.component';
import { EstudioComponent } from './dashboard-page/editables-dashboard/estudio/estudio.component';
import { MisHablidadesComponent } from './dashboard-page/editables-dashboard/mis-hablidades/mis-hablidades.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from './servicios/persona.service';
import { InterceptorService } from './servicios/interceptor.service';
import { MisProyectosComponent } from './dashboard-page/editables-dashboard/mis-proyectos/mis-proyectos.component';
import { RedComponent } from './dashboard-page/editables-dashboard/red/red.component';
import { BannerComponent } from './componentes/banner/banner.component';


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
    BotonLoginComponent,
    BotonLogoutComponent,
    BotonesDashboardComponent,
    PerfilComponent,
    ExperienciaLaboralComponent,
    EstudioComponent,
    MisHablidadesComponent,
    ProyectoComponent,
    MisProyectosComponent,
    RedComponent,
    BannerComponent
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

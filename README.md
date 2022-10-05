# ProyectoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Para poder ver lo que hago pongo una nueva consola y coloco ng serve
# Entro a la página para ver que esta funcionando
# No elimino la Terminal porque se me cierra todo
# La carpeta node_modules por defecto no se sube a Github por lo que pesa
# Dentro de la carpeta src va a estar toda mi aplicación
# En el html la etiqueta app root hace referencia a app.component
# En app.component.html se puede borrar todo menos <router-outlet></router-outlet> que es para hacer los enlaces de página a página
# Instalo Angular Schematics (dicen que me va a salvar el alma)
# Si no aparece el botón Angular de Angular Schematics en la barra de la izquierda tengo que desinstalar y volver a instalar Angular Schematics hasta que aparezca
# Botón derecho en la carpeta src y pongo en generar componente Angular
# Llamo al componente navbar
# Cada parte de mi maqueta tiene que ser un componente (para eso es que es mejor tener la maqueta con el código comentado)
# Cada componente tiene su propio css de estilos. Ese css es solo para ese componente en particular. Si son estilos css generales no van en el estilo general de cada componente
# Angular es para front-end (es un Framework)
# No hay manera de errarle a los datos cuando se ponen cada una de las partes
# Con el routing lo que puedo hacer es que cosas que se repitan solo las hago una vez y las routeo en cada página que quiero que se utilice. Si quiero cambiar algo lo cambio en el componente una sola vez y se cambia en cada página que tenga el componente routeado
# Ángular es (SPA Aplicación de página única) y no MPA (Aplicación de páginas multiples)
# Muestra pedacitos de la página (no se repiten las cosas) (es mucho más liviana que la MPA)
# Empiezo lectura de Módulo 3 (Angular)
# En este módulo se pasa el html y css cortado en pedacitos a Ángular
# En el caso de tener que borrar el proyecto para hacer un nuevo proyecto me posiciono en la carpeta en Visual Studio y pongo en la terminal: ng new NombreDelPortfolio
# Vamos a pasar la navbar
# Me voy a app.component.html
# Que ahí esta lo que se ve en la página de muestra y se borra todo lo que hay ahí
# Me veo el selector del component ts
# Pongo en el html del componente navbar la parte de html de la navbar
# Pongo las librerias de bootstrap y fontawesome en el html general (index)
# Puse las carpetas de assets anterior en las del proyecto Angular con el explorador de windows
# Al boton de user le falta el modal, por lo tanto creo un componente del modal
# Para hacer los modales combiene hacer todos en la misma carpeta, por lo que se genera una carpeta en src/app que se llame modals y dentro de ahi el componente con Agular Schematics llamado login (para el modal del login)
# Como cambie el componente de lugar en el archivo app.module.ts y algo habré hecho mal al crear el componente en la carpeta modals cambio la ruta del import de login del archivo app.module.ts para que no quede el que etsba en la carpeta raíz
# Como no funcionaba el modal me fijo que en el html de app.component no esta enlazada como la navbar con <app-login></app-login> que es con el selector que se encuentra en login.component.ts
# Como el modal es del navbar lo pongo en el html del navbar y no en el html de app.component (Esto se lo llama hacer Layout)
# Para probar hago un Layout tambien de redes (Esto sirve mucho para el backend)
# Me fijo el selector en redes.component.ts de la carpeta redes entonces en la navbar donde estaba el html de las redes pongo <app-redes></app-redes>
# Los estilos de las clases que son compartidas los ponenmos en app.componen.css o en styles.css, si hacemos lo ultimo hay que enlazar los styles.css en el index.html
# Cómo en Ángular se carga solo lo que necesitas en el momento que lo necesitas, en cambio en html se llama todo junto.
# Además sirve para que sea mas facil programar por llamar cada componente por separado
# Ahora que pase la página a Ángular me fijo si puedo hacer el routing para el Dashboard, voy a intentar hacerlo con el Angular Schematics
# Pongo en Ángular Schematics grar módulo y lo llamo routing 
# ng generate module app-routing --flat --module=app
# Para hacer la rutas
# Como daba error elimine el archivo y lo volvi a correr la línea
# Agrego <router-outlet></router-outlet> al final del html de app.component
# Agrego import { RouterModule, Routes } from '@angular/router'; debajo de los imports que había en app-routing.module.ts
# Luego debo incorporar ahí todos los componentes
# En @ngModule imports pongo: abajo de CommonModule pongo RouterModule.forRoot(routes)
# Luego abajo del imports pongo una coma detras del ] de imports y agrego una linea que diga
# exports: [RouterModule]
# Abajo de import { RouterModule, Routes } from '@angular/router'; escribo: const routes: Routes = [];
# Ahí adentro quiero que quede: 
# const routes: Routes = [
    {path: 'route', component:RouteComponent},
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '**', component: ErrorComponent}
];
# {path: 'route', component:RouteComponent}, es la ruta que sigue el usuario
# Es para hacer lo que quiera que haga el usuario.
# Como yo quiero que el usuario cambie el Dashboard cambio 'route' por 'dashboard'
# y cambio RouteComponent por DashboardComponent
# Cómo marca error ErrorComponent y DashboardComponent por no existir estos componentes procedo a crearlos
# Cómo sigue dando error me fijo que esten importados en app.module.ts
# Me fijo que borrando la ultima letra de los componentes Dashboard y Error en app-roting.module.ts
# e importandolos se soluciona el problema por lo que agrego:
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
# Luego voy a abrir un componente que se llame intro y le pongo todo lo que tenía el app.component.html y el app.component.css en ese componente y en app.component.html solo dejo <router-outlet></router-outlet>
# En Ángular debo cambiar los botones de las redes en vez de con href usamos
# Hago el dashboard en Ángular
# Agrego un componente index para poner la página (en vez de intro)
# Luego este componente lo importo en app-routing.module.ts como los componentes Dahsboard o Error anteriores
# Tengo que poner en dashboard una navbar distinta por el iconito de cerrar perfil
# Hago la navegación interna de la página con <a routerLink="/">Enlace</a>, las redes con href como antes
# Voy a usar ng if dentro del componente redes

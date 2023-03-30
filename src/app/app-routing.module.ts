//con este de aqui abajo importamos los componentes

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { ContactoComponent } from './contacto/contacto.component';


//en esta punto de abajo se pode la ruta con el objetivo de llegar y aja 

const routes: Routes = [
{path:'',component:BienvenidaComponent},
{path:'productos',component:ProductosComponent },
{path:'login',component:LoginComponent},
{path:'contacto',component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

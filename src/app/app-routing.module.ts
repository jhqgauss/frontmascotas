import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimalComponent} from './animal/animal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'mascotas',component:AnimalComponent},
  {path:'',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

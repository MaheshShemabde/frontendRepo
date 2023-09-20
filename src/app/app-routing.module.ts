import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DonarComponent } from './components/donar/donar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'donar',
    component:DonarComponent
  }
  ,
  {
    path:'navbar',
    component:NavbarComponent
  }
  ,
  {
    path:'admin',
    component:AdminComponent
  }
  ,
  {
    path:'product',
    component:ProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

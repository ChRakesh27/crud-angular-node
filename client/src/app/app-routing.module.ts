import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [{path:"sign",component:SigninComponent},{path:'show',component:ShowComponent}]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ 
  
}

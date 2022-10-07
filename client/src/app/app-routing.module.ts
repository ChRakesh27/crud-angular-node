import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { SigninComponent } from './signin/signin.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"sign",component:SigninComponent},
  {path:'show',component:ShowComponent},
  {path:'update', component:UpdateComponent}]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ 
  
}

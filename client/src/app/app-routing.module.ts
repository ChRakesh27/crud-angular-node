import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './show/show.component';
import { SigninComponent } from './signin/signin.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: "sign", component: SigninComponent },
  { path: 'show', component: ShowComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

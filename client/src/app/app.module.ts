import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { AppserviceService } from './appservice.service';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ShowComponent,
    UpdateComponent,
    LoginComponent,
    ErrorComponent,
    StudentComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

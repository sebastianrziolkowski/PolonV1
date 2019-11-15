import {Injectable, NgModule, Pipe} from '@angular/core';
import {AppRoutingModule, XhrInterceptor} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserService} from "./user.service";
import {UserEditComponent} from './user-edit/user-edit.component';
import {SearchPipe} from "./user-list/pipe";
import {LoginComponent} from './login/login.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { LogoutComponent } from './logout/logout.component';
import {CommonModule} from "@angular/common";
import { ProfileDetailsComponent } from './profile-details/profile-details.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserEditComponent,
    SearchPipe,
    LoginComponent,
    LogoutComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {LoginComponent} from "./login/login.component";
import {HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {LogoutComponent} from "./logout/logout.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProfileDetailsComponent} from "./profile-details/profile-details.component";
import {AppComponent} from "./app.component";


@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'edituser/:id', component: UserEditComponent},
  {path: 'adduser', component: UserFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'profile-details', component: ProfileDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, finalize} from "rxjs/operators";
import {UserService} from "./user.service";
import {AuthenticationService} from "./service/authentication.service";
import {User} from "./user";
import {RoleService} from "./service/role/role.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService, HttpClient]
})
export class AppComponent implements OnInit {
  title = 'polon';
  private user: string;

  constructor(private readonly app: UserService,
              private http: HttpClient,
              private router: Router,
              private loginService: AuthenticationService,
              private roleService: RoleService) {}

  userInSessionStorageIsEmpty() {
    if (sessionStorage.getItem('username') !== '' && this.loginService.isUserLoggedIn()) {
      this.user = sessionStorage.getItem('username');
      return false;
    }
    return true;
  }




  ngOnInit() {
  }
}


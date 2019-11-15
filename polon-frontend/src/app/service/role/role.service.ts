import { Injectable } from '@angular/core';
import {UserService} from "../../user.service";
import {Observable} from "rxjs";
import {role, User} from "../../user";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private userService: UserService) {

  }
  getUserRoleByLogin (username) :Observable<role> {
    return this.userService.findRoleByUserLogin(username);
  }


  userIsAdmin() :boolean {
    return sessionStorage.getItem('role') === 'ADMIN';
  }

  userIsUser() :boolean {
    return sessionStorage.getItem('role') === 'USER';
  }

}

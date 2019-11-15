import { Injectable } from '@angular/core';
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {role} from '../user'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private message: Observable<Object>;
  constructor(private userService: UserService) { }


authenticate(username, password){
    this.userService.findByUserLogin (username, password).subscribe( data => {
      console.log("data = " + data.valueOf());
      if (data.valueOf() == true) {
        sessionStorage.setItem('username', username);
        return true;
      } else {
        return false;
      }
    });
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}

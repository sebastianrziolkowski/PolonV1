import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from "../user.service";
import {AuthenticationService} from "../service/authentication.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {role, User} from "../user";


@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  invalidLogin = false;

  userForm = new FormGroup(
    {
      login: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]))
    }
  );
  constructor(private app: UserService, private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private loginservice: AuthenticationService, private userService: UserService) {
  }

  getInputFromForm(control: string){
    return this.userForm.get(control);
  }


  checkLogin() {
    if(this.getInputFromForm('login').valid && this.getInputFromForm('password').valid){
      this.userService.findByUserLogin(this.getInputFromForm('login').value, this.getInputFromForm('password').value).subscribe(data => {
        if (data !== null) {
          var user  = data;
          this.updateSessionStorage(user.id, user.userLogin, user.role);
          this.router.navigateByUrl('/');
        }
        else {
          this.invalidLogin = true;
          this.getInputFromForm('login').setValue('');
          this.getInputFromForm('password').setValue('');
          this.getInputFromForm('login').markAsUntouched();
          this.getInputFromForm('password').markAsUntouched();
        }
      });
    }
    else {
      console.log("Invalid login data.");
    }
  }

  updateSessionStorage(id: number, login: string, role: number) {
     sessionStorage.setItem('id', id.toString());
     sessionStorage.setItem('username', login);
     sessionStorage.setItem('role', role.toString());
  }

  ngOnInit() {
  }

}

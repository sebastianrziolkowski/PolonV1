import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User;
  show: boolean;

  userForm = new FormGroup({
    userLogin: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32)
    ])),
    userName: new FormControl('', Validators.compose([
      Validators.minLength(2),
      Validators.maxLength(255)
    ])),
    userSurname: new FormControl('', Validators.compose([
      Validators.minLength(2),
      Validators.maxLength(255)
    ])),
    userPassword: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32)
    ])),
    userConfirmPassword: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32)
    ])),
    email: new FormControl('', Validators.compose([
      Validators.email
    ])),
    age: new FormControl('', Validators.compose(([
      Validators.min(13),
      Validators.max(120)
    ])))
  });
  private role: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private userService: UserService) {
    this.user = new User();
  }

  get loginField() {
    return this.userForm.get('userLogin')
  }

  get emailField() {
    return this.userForm.get('email')
  }

  get nameField() {
    return this.userForm.get('userName')
  }

  get surnameField() {
    return this.userForm.get('userSurname')
  }

  get passwordField() {
    return this.userForm.get('userPassword')
  }

  get confirmPasswordField() {
    return this.userForm.get('userConfirmPassword')
  }

  get ageField() {
    return this.userForm.get('age')
  }

  createUser() {
    this.createObject();
    this.userService.save(this.user).subscribe(result => this.gotoUserList(),
      error => {
        console.log(error);
      });
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

  rand20User() {
    let nameList: string[] = ['Willetta', 'Beckie', 'Shenita', 'Ebonie', 'Particia', 'Donna', 'Denisse', 'Camille', 'Enrique', 'Noemi', 'Allegra', 'Ariana', 'Rhett', 'Alise', 'Tresa', 'Shirleen', 'Beaulah', 'Lasandra', 'Hope', 'Hopper'];
    for (let name of nameList) {

      let randomUser = new User();
      randomUser.setUser(name + "123", name, name.repeat(2).substring(3.8).toLowerCase(), name, name + "@gmail.com", Math.floor(Math.random() * 12) + 18, this.role.USER);
      this.userService.save(randomUser).subscribe(result => this.gotoUserList(), error => {
        console.log(error);
      });
    }
  }

  createObject() {
    this.user.userLogin = this.loginField.value;
    this.user.userName = this.nameField.value;
    this.user.userSurname = this.surnameField.value;
    this.user.userPassword = this.passwordField.value;
    this.user.email = this.emailField.value;
    this.user.age = this.ageField.value;
  }


  passwordFieldsAreEqual(){
    return this.passwordField.value === this.confirmPasswordField.value;

  }

  password() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.show = false;
  }
}


import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {md5} from "../../resources/md5";


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  public user: User = null;

  editForm = new FormGroup(
    {
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
      email: new FormControl('', Validators.compose([
        Validators.email
      ])),
      age: new FormControl('', Validators.compose([
        Validators.max(120),
        Validators.min(6)
      ]))
    }
  );


  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) {
}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const userId = +params['id'];
      this.loadUser(userId);
    }, error => console.log(error))
  }


  private loadUser(userId) {
    this.userService.findById(userId).subscribe(user => {
      if (user !== null) {
        this.user = user;
        this.fillUserFields();
      } else {
        console.log("User with id: " + userId + " is null.");
        this.router.navigateByUrl("/users")
      }
    }, error =>
      console.log("Can't find user with " + userId + "id"));
  }

  getInputFromEditForm(control: string){
    return this.editForm.get(control);
  }

  private fillUserFields() {
    this.editForm.setValue({
      userLogin: this.user.userLogin,
      userName: this.user.userName,
      email: this.user.email,
      userPassword: this.user.userPassword,
      userSurname: this.user.userSurname,
      age: this.user.age
    })
  }

  saveUser() {
    console.log(this.user);
    this.user = Object.assign({}, this.user, this.editForm.value);
    console.log(this.user);
    this.userService.save(this.user).subscribe(user => {
      this.router.navigateByUrl('/users');
    }, error => {
      console.log(error);
    })
  }


  backtoList() {
    this.router.navigateByUrl('/users');
  }
}

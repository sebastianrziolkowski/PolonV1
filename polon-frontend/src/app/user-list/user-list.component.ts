import {Component, OnInit} from '@angular/core';
import {role, User} from "../user";
import {UserService} from "../user.service";
import {RoleService} from "../service/role/role.service";
import {md5} from "../../resources/md5";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface FilterFormValue {
  id: number
  login: string
  name: string
  surname: string
  email: string
  age: number
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  filteredUser: User[];
  users: User[];

  filterForm = new FormGroup({
    id: new FormControl(''),
    login: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    surname: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl('')
  });


  constructor(private userService: UserService,
              private router: Router,
              private formBuilder: FormBuilder,
              private roleService: RoleService) {
  }

  hashPassword() {
    this.users.forEach(function (user) {
      user.userPassword = md5(user.userPassword);
    })
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(user => {
      this.ngOnInit()
    }, (error => {
      console.log(error);
    }))
  }

  sortBy(type: string, variable: string) {
    if (type == "ASC") {
      this.filteredUser = this.filteredUser.sort((obj1, obj2) => {
        if (obj1[variable] > obj2[variable]) return 1;
        if (obj1[variable] < obj2[variable]) return -1;
        return 0;
      });
    } else if (type == "DESC") {
      this.filteredUser = this.filteredUser.sort((obj1, obj2) => {
        if (obj1[variable] < obj2[variable]) return 1;
        if (obj1[variable] > obj2[variable]) return -1;
        return 0;
      });
    }
  }

  cleanFilter() {
    this.filteredUser = this.users;
    this.initFilterForm()
  }

  private watchFormChanges() {
    this.filterForm.valueChanges.subscribe((value: FilterFormValue) => this.filterUser(value));
  }

  private initFilterForm() {
    this.filterForm = this.formBuilder.group({
      id: [''],
      login: [''],
      name: [''],
      email: [''],
      surname: [''],
      age: ['']
    });
    this.watchFormChanges();
  }

  private filterUser(value: FilterFormValue) {
    let filters = {
      id: value.id,
      login: value.login,
      name: value.name,
      email: value.email,
      surname: value.surname,
      age: value.age
    };

    this.filteredUser =this.users.filter(user =>
      user.id.toString().includes(filters.id.toString()) &&
      user.userLogin.toLowerCase().includes(filters.login.toLowerCase()) &&
      user.userName.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.userSurname.toLowerCase().includes(filters.surname.toLowerCase()) &&
      user.age.toString().includes(filters.age.toString()));
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      this.filteredUser = data;
      this.initFilterForm();
      this.hashPassword()
    }, (error => {
      console.log(error);
    }));
  }


}

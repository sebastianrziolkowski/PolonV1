import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {FormBuilder} from "@angular/forms";
import {User} from "../user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }
  user: User;

  ngOnInit() {
    console.log(Number(sessionStorage.getItem('id')));
    this.userService.findById(Number(sessionStorage.getItem('id'))).subscribe(data => {
      this.user = data;
      console.log(this.user);
    }, (error => {
      console.log(error);
    }));
  }



}

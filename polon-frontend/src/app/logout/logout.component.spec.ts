import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import {AppModule} from "../app.module";
import {UserService} from "../user.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {FormBuilder} from "@angular/forms";
import {Routes} from "@angular/router";
import * as path from "path";
import {LoginComponent} from "../login/login.component";
import {UserListComponent} from "../user-list/user-list.component";
import {UserEditComponent} from "../user-edit/user-edit.component";
import {UserFormComponent} from "../user-form/user-form.component";

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LogoutComponent ],
      providers: [UserService, HttpClient, HttpHandler, HttpClientModule, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

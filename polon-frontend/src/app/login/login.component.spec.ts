import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {AppComponent} from "../app.component";
import {ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../user.service";
import {User} from "../user";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [UserService, LoginComponent, HttpHandler, HttpClient, HttpClientModule, AppComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {UserService} from "../user.service";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule],
      declarations: [ UserListComponent ],
      providers: [HttpHandler, HttpClient, HttpClientModule, UserService, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

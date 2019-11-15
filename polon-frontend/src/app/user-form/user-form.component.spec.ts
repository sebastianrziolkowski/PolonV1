import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import {RouterTestingModule} from "@angular/router/testing";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../user.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule],
      declarations: [ UserFormComponent ],
      providers: [FormBuilder, UserService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

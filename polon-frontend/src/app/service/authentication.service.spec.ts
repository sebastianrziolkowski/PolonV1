import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {RouterTestingModule} from "@angular/router/testing";
import {UserService} from "../user.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {LoginComponent} from "../login/login.component";

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [UserService, HttpHandler, HttpClient, LoginComponent]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [UserService, HttpClient, HttpHandler, HttpClientModule]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});

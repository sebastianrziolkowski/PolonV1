import {Injectable} from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {role} from "./user"

@Injectable()
export class UserService {

  private usersUrl: string;
  private authUrl: string;
  private basicUrl: string;
  authenticated = false;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/user';
    this.authUrl = 'http://localhost:8080/auth';
    this.basicUrl = 'http://localhost:8080/';
  }

  public findRoleByUserLogin(userLogin: string): Observable<role> {
    return this.http.get<role>(`${this.basicUrl}+roleAuth/${userLogin}`);
  }

  public findByUserLogin(userLogin: string, userPassword: string): Observable<User> {
    return this.http.get<User>(`${this.authUrl}/${userLogin}/${userPassword}`);
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  deleteUser(id: number): Observable<User> {
    return  this.http.delete<User>(`${this.usersUrl}/${id}`);
  }

}

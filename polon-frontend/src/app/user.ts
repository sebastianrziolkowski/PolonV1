export enum role {
  ADMIN, USER, NONE
}

export class User {
  id: number;
  userLogin: string;
  userName: string;
  userSurname: string;
  userPassword: string;
  email: string;
  age: number;
  active: boolean;
  role: role;


  setUser(uLogin:string, uName: string, uSurname:string, uPassword:string, uemail:string, uAge: number, uRole: role){
    this.userLogin= uLogin;
    this.userName = uName;
    this.userSurname = uSurname;
    this.userPassword = uPassword;
    this.email = uemail;
    this.age = uAge;
    this.active = true;
    this.role = uRole;
  }
}

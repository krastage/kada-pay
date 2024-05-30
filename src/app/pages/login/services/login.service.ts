import { Injectable } from "@angular/core";
import { LoginDto } from "@/app/pages/login/services/login.dto";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  public loginData: LoginDto = {
    email: "",
    password: ""
  };

  constructor() {
  }

  public getLoginData(): LoginDto {
    return this.loginData;
  }

  public setLoginData(loginData: LoginDto) {
    this.loginData = loginData;
  }
}

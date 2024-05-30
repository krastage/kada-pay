import { Component } from "@angular/core";
import { LoginService } from "@/app/pages/login/services/login.service";
import { LoginDto } from "@/app/pages/login/services/login.dto";
import { Router } from "@angular/router";
import { MainRoutes } from "@/app/shared/types/routes";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  public loginData: LoginDto = {
    email: "",
    password: ""
  };

  constructor(private loginService: LoginService, private router: Router) {
    this.loginData = this.loginService.getLoginData();
  }

  public onSubmit() {
    this.loginService.setLoginData(this.loginData);

    if (this.loginData.email === "admin" && this.loginData.password === "admin") {
      setTimeout(() => {
        this.router.navigate([MainRoutes.ADMIN]);
      }, 1000);
    } else if (this.loginData.email === "borrower" && this.loginData.password === "borrower") {
      setTimeout(() => {
        this.router.navigate([MainRoutes.BORROWER]);
      }, 1000);
    } else if (this.loginData.email === "fo" && this.loginData.password === "fo") {
      setTimeout(() => {
        this.router.navigate([MainRoutes.FO]);
      }, 1000);
    } else if (this.loginData.email === "store" && this.loginData.password === "store") {
      setTimeout(() => {
        this.router.navigate([MainRoutes.STORE]);
      }, 1000);
    } else {
      alert("Incorrect email or password");
    }
  }
}

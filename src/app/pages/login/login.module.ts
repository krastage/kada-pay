import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "@/app/pages/login/login.component";
import { SharedModule } from "@/app/shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})

export class LoginModule {
}

import { MainLogoComponent } from "@/app/shared/main-logo/main-logo.component";
import { NgModule } from "@angular/core";
import { InputsComponent } from "@/app/shared/inputs/inputs.component";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "./spinner/spinner.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PrimaryButtonComponent } from './buttons/primary-button/primary-button.component';

@NgModule({
  declarations: [
    MainLogoComponent,
    InputsComponent,
    SpinnerComponent,
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MainLogoComponent,
    SpinnerComponent,
    PrimaryButtonComponent
  ]
})
export class SharedModule {
}

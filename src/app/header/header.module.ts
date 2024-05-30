import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "@/app/header/header.component";
import { SharedModule } from "@/app/shared/shared.module";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgOptimizedImage,
  ]
})
export class HeaderModule {
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentWrapperComponent } from "@/app/content-wrapper/content-wrapper.component";
import { HeaderModule } from "@/app/header/header.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NotFoundPageModule } from "@/app/pages/not-found-page/not-found-page.module";
import { RouterOutlet } from "@angular/router";
import { SidebarModule } from "@/app/sidebar/sidebar.module";

@NgModule({
  declarations: [
    ContentWrapperComponent
  ],
  exports: [
    ContentWrapperComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatProgressSpinnerModule,
    NotFoundPageModule,
    RouterOutlet,
    SidebarModule
  ]
})
export class ContentWrapperModule {
}

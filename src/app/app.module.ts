import { NgModule } from "@angular/core";
import { AppComponent } from "@/app/app.component";
import { AppRoutingModule } from "@/app/app-routing.module";
import { ContentWrapperModule } from "@/app/content-wrapper/content-wrapper.module";
import { SharedModule } from "@/app/shared/shared.module";
import { LoginModule } from "@/app/pages/login/login.module";
import { PagesModule } from "@/app/pages/pages.module";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentWrapperModule,
    SharedModule,
    LoginModule,
    PagesModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

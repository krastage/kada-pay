import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@/app/shared/shared.module";
import { LoginModule } from "@/app/pages/login/login.module";
import { AdminRoutingModule } from "@/app/pages/admin/admin-routing.module";
import { BorrowerRoutingModule } from "@/app/pages/borrower/borrower-routing.module";
import { FoRoutingModule } from "@/app/pages/fo/fo-routing.module";
import { StoreRoutingModule } from "@/app/pages/store/store-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule,
    AdminRoutingModule,
    BorrowerRoutingModule,
    FoRoutingModule,
    StoreRoutingModule
  ],
  exports: []
})
export class PagesModule {
}

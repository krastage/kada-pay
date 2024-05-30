import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BorrowerComponent } from "@/app/pages/borrower/borrower.component";
import { BorrowerStatisticsComponent } from "@/app/pages/borrower/statistics/borrower-statistics.component";
import { BorrowerCalculatorComponent } from "@/app/pages/borrower/calculator/borrower-calculator.component";
import { BorrowerTicketsComponent } from "@/app/pages/borrower/tickets/borrower-tickets.component";
import { BorrowerSettingsComponent } from "@/app/pages/borrower/settings/borrower-settings.component";
import { BorrowerSupportComponent } from "@/app/pages/borrower/support/borrower-support.component";
import { ContentWrapperModule } from "@/app/content-wrapper/content-wrapper.module";
import { NotFoundPageModule } from "@/app/pages/not-found-page/not-found-page.module";
import { SharedModule } from "@/app/shared/shared.module";
import { HeaderModule } from "@/app/header/header.module";
import { SidebarModule } from "@/app/sidebar/sidebar.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BorrowerRoutingModule } from "@/app/pages/borrower/borrower-routing.module";
import { StatisticsModule } from "@/app/statistics/statistics.module";

@NgModule({
  declarations: [
    BorrowerComponent,
    BorrowerStatisticsComponent,
    BorrowerCalculatorComponent,
    BorrowerTicketsComponent,
    BorrowerSettingsComponent,
    BorrowerSupportComponent,
  ],
  imports: [
    CommonModule,
    BorrowerRoutingModule,
    HeaderModule,
    SidebarModule,
    NotFoundPageModule,
    MatProgressSpinnerModule,
    ContentWrapperModule,
    SharedModule,
    StatisticsModule,
  ]
})
export class BorrowerModule {
}

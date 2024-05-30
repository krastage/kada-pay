import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminBorrowersListComponent } from "./borrowers-list/admin-borrowers-list.component";
import { AdminCalculatorComponent } from "./calculator/admin-calculator.component";
import { AdminFoListComponent } from "./fo-list/admin-fo-list.component";
import { AdminSettingsComponent } from "./settings/admin-settings.component";
import { AdminStatisticsComponent } from "./statistics/admin-statistics.component";
import { AdminStoresListComponent } from "./stores-list/admin-stores-list.component";
import { AdminSupportComponent } from "./support/admin-support.component";
import { AdminSurveySettingsComponent } from "./survey-settings/admin-survey-settings.component";
import { AdminTicketsComponent } from "./tickets/admin-tickets.component";
import { AdminComponent } from "@/app/pages/admin/admin.component";
import { HeaderModule } from "@/app/header/header.module";
import { SidebarModule } from "@/app/sidebar/sidebar.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NotFoundPageModule } from "@/app/pages/not-found-page/not-found-page.module";
import { ContentWrapperModule } from "@/app/content-wrapper/content-wrapper.module";
import { SharedModule } from "@/app/shared/shared.module";
import { StatisticsModule } from "@/app/statistics/statistics.module";


@NgModule({
  declarations: [
    AdminComponent,
    AdminBorrowersListComponent,
    AdminCalculatorComponent,
    AdminFoListComponent,
    AdminSettingsComponent,
    AdminStatisticsComponent,
    AdminStoresListComponent,
    AdminSupportComponent,
    AdminSurveySettingsComponent,
    AdminTicketsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderModule,
    SidebarModule,
    NotFoundPageModule,
    MatProgressSpinnerModule,
    ContentWrapperModule,
    SharedModule,
    StatisticsModule,
  ],
  exports: []
})
export class AdminModule {
}

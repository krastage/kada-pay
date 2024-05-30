import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FoComponent } from "@/app/pages/fo/fo.component";
import { FoCalculatorComponent } from "@/app/pages/fo/calculator/fo-calculator.component";
import { FoSettingsComponent } from "@/app/pages/fo/settings/fo-settings.component";
import { FoStatisticsComponent } from "@/app/pages/fo/statistics/fo-statistics.component";
import { FoSupportComponent } from "@/app/pages/fo/support/fo-support.component";
import { FoTicketsComponent } from "./tickets/fo-tickets.component";
import { FoRoutingModule } from "@/app/pages/fo/fo-routing.module";
import { HeaderModule } from "@/app/header/header.module";
import { SidebarModule } from "@/app/sidebar/sidebar.module";
import { NotFoundPageModule } from "@/app/pages/not-found-page/not-found-page.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ContentWrapperModule } from "@/app/content-wrapper/content-wrapper.module";
import { SharedModule } from "@/app/shared/shared.module";
import { StatisticsModule } from "@/app/statistics/statistics.module";

@NgModule({
  declarations: [
    FoComponent,
    FoSettingsComponent,
    FoCalculatorComponent,
    FoStatisticsComponent,
    FoSupportComponent,
    FoTicketsComponent
  ],
  imports: [
    CommonModule,
    FoRoutingModule,
    HeaderModule,
    SidebarModule,
    NotFoundPageModule,
    MatProgressSpinnerModule,
    ContentWrapperModule,
    SharedModule,
    StatisticsModule,
  ]
})
export class FoModule {
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreTicketsComponent } from "./tickets/store-tickets.component";
import { StoreStatisticsComponent } from "./statistics/store-statistics.component";
import { StoreSettingsComponent } from "./settings/store-settings.component";
import { StoreSupportComponent } from "./support/store-support.component";
import { StoreCalculatorComponent } from "./calculator/store-calculator.component";
import { StoreComponent } from "@/app/pages/store/store.component";
import { StoreRoutingModule } from "@/app/pages/store/store-routing.module";
import { HeaderModule } from "@/app/header/header.module";
import { SidebarModule } from "@/app/sidebar/sidebar.module";
import { NotFoundPageModule } from "@/app/pages/not-found-page/not-found-page.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ContentWrapperModule } from "@/app/content-wrapper/content-wrapper.module";
import { SharedModule } from "@/app/shared/shared.module";
import { StatisticsModule } from "@/app/statistics/statistics.module";

@NgModule({
  declarations: [
    StoreComponent,
    StoreTicketsComponent,
    StoreStatisticsComponent,
    StoreSettingsComponent,
    StoreSupportComponent,
    StoreCalculatorComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    HeaderModule,
    SidebarModule,
    NotFoundPageModule,
    MatProgressSpinnerModule,
    ContentWrapperModule,
    SharedModule,
    StatisticsModule,
  ]
})
export class StoreModule {
}

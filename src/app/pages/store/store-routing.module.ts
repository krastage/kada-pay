import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdditionalRoutes, MainRoutes } from "@/app/shared/types/routes";
import { NotFoundPageComponent } from "@/app/pages/not-found-page/not-found-page.component";
import { StoreComponent } from "@/app/pages/store/store.component";
import { StoreStatisticsComponent } from "@/app/pages/store/statistics/store-statistics.component";
import { StoreCalculatorComponent } from "@/app/pages/store/calculator/store-calculator.component";
import { StoreTicketsComponent } from "@/app/pages/store/tickets/store-tickets.component";
import { StoreSettingsComponent } from "@/app/pages/store/settings/store-settings.component";
import { StoreSupportComponent } from "@/app/pages/store/support/store-support.component";

const storeRoutes: Routes = [
  {
    path: MainRoutes.DEFAULT,
    component: StoreComponent,
    children: [
      {
        path: MainRoutes.DEFAULT,
        redirectTo: AdditionalRoutes.STATISTICS,
        pathMatch: "full",
      },
      {
        path: AdditionalRoutes.STATISTICS,
        component: StoreStatisticsComponent,
        title: "Store | Statistics",
      },
      {
        path: AdditionalRoutes.CALCULATOR,
        component: StoreCalculatorComponent,
        title: "Store | Calculator",
      },
      {
        path: AdditionalRoutes.TICKETS,
        component: StoreTicketsComponent,
        title: "Store | Tickets",
      },
      {
        path: AdditionalRoutes.SETTINGS,
        component: StoreSettingsComponent,
        title: "Store | Settings",
      },
      {
        path: AdditionalRoutes.SUPPORT,
        component: StoreSupportComponent,
        title: "Store | Support",
      },
      {
        path: MainRoutes.NOT_FOUND,
        component: NotFoundPageComponent,
        title: "Store | Page not found",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(storeRoutes)],
  exports: [RouterModule]
})

export class StoreRoutingModule {
}

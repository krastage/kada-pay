import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdditionalRoutes, MainRoutes } from "@/app/shared/types/routes";
import { NotFoundPageComponent } from "@/app/pages/not-found-page/not-found-page.component";
import { FoComponent } from "@/app/pages/fo/fo.component";
import { FoStatisticsComponent } from "@/app/pages/fo/statistics/fo-statistics.component";
import { FoCalculatorComponent } from "@/app/pages/fo/calculator/fo-calculator.component";
import { FoTicketsComponent } from "@/app/pages/fo/tickets/fo-tickets.component";
import { FoSettingsComponent } from "@/app/pages/fo/settings/fo-settings.component";
import { BorrowerSupportComponent } from "@/app/pages/borrower/support/borrower-support.component";
import { FoSupportComponent } from "@/app/pages/fo/support/fo-support.component";

const foRoutes: Routes = [
  {
    path: MainRoutes.DEFAULT,
    component: FoComponent,
    children: [
      {
        path: MainRoutes.DEFAULT,
        redirectTo: AdditionalRoutes.STATISTICS,
        pathMatch: "full",
      },
      {
        path: AdditionalRoutes.STATISTICS,
        component: FoStatisticsComponent,
        title: "FO | Statistics",
      },
      {
        path: AdditionalRoutes.CALCULATOR,
        component: FoCalculatorComponent,
        title: "FO | Calculator",
      },
      {
        path: AdditionalRoutes.TICKETS,
        component: FoTicketsComponent,
        title: "FO | Tickets",
      },
      {
        path: AdditionalRoutes.SETTINGS,
        component: FoSettingsComponent,
        title: "FO | Settings",
      },
      {
        path: AdditionalRoutes.SUPPORT,
        component: FoSupportComponent,
        title: "FO | Support",
      },
      {
        path: MainRoutes.NOT_FOUND,
        component: NotFoundPageComponent,
        title: "FO | Page not found",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(foRoutes)],
  exports: [RouterModule]
})

export class FoRoutingModule {
}

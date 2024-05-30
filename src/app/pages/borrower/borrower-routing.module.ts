import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdditionalRoutes, MainRoutes } from "@/app/shared/types/routes";
import { BorrowerComponent } from "@/app/pages/borrower/borrower.component";
import { BorrowerStatisticsComponent } from "@/app/pages/borrower/statistics/borrower-statistics.component";
import { BorrowerCalculatorComponent } from "@/app/pages/borrower/calculator/borrower-calculator.component";
import { BorrowerTicketsComponent } from "@/app/pages/borrower/tickets/borrower-tickets.component";
import { BorrowerSettingsComponent } from "@/app/pages/borrower/settings/borrower-settings.component";
import { NotFoundPageComponent } from "@/app/pages/not-found-page/not-found-page.component";
import { BorrowerSupportComponent } from "@/app/pages/borrower/support/borrower-support.component";

const borrowerRoutes: Routes = [
  {
    path: MainRoutes.DEFAULT,
    component: BorrowerComponent,
    children: [
      {
        path: MainRoutes.DEFAULT,
        redirectTo: AdditionalRoutes.STATISTICS,
        pathMatch: "full",
      },
      {
        path: AdditionalRoutes.STATISTICS,
        component: BorrowerStatisticsComponent,
        title: "Borrower | Statistics",
      },
      {
        path: AdditionalRoutes.CALCULATOR,
        component: BorrowerCalculatorComponent,
        title: "Borrower | Calculator",
      },
      {
        path: AdditionalRoutes.TICKETS,
        component: BorrowerTicketsComponent,
        title: "Borrower | Tickets",
      },
      {
        path: AdditionalRoutes.SETTINGS,
        component: BorrowerSettingsComponent,
        title: "Borrower | Settings",
      },
      {
        path: AdditionalRoutes.SUPPORT,
        component: BorrowerSupportComponent,
        title: "Borrower | Support",
      },
      {
        path: MainRoutes.NOT_FOUND,
        component: NotFoundPageComponent,
        title: "Borrower | Page not found",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(borrowerRoutes)],
  exports: [RouterModule],
})

export class BorrowerRoutingModule {
}

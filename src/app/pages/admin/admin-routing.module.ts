import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdditionalRoutes, MainRoutes } from "@/app/shared/types/routes";
import { AdminStatisticsComponent } from "@/app/pages/admin/statistics/admin-statistics.component";
import { AdminBorrowersListComponent } from "@/app/pages/admin/borrowers-list/admin-borrowers-list.component";
import { AdminFoListComponent } from "@/app/pages/admin/fo-list/admin-fo-list.component";
import { AdminStoresListComponent } from "@/app/pages/admin/stores-list/admin-stores-list.component";
import { AdminSurveySettingsComponent } from "@/app/pages/admin/survey-settings/admin-survey-settings.component";
import { AdminCalculatorComponent } from "@/app/pages/admin/calculator/admin-calculator.component";
import { AdminTicketsComponent } from "@/app/pages/admin/tickets/admin-tickets.component";
import { AdminSettingsComponent } from "@/app/pages/admin/settings/admin-settings.component";
import { AdminSupportComponent } from "@/app/pages/admin/support/admin-support.component";
import { AdminComponent } from "@/app/pages/admin/admin.component";
import { NotFoundPageComponent } from "@/app/pages/not-found-page/not-found-page.component";

const adminRoutes: Routes = [
  {
    path: MainRoutes.DEFAULT,
    component: AdminComponent,
    children: [
      {
        path: MainRoutes.DEFAULT,
        redirectTo: AdditionalRoutes.STATISTICS,
        pathMatch: "full",
      },
      {
        path: AdditionalRoutes.STATISTICS,
        component: AdminStatisticsComponent,
        title: "Admin | Statistics",
      },
      {
        path: AdditionalRoutes.BORROWERS_LIST,
        component: AdminBorrowersListComponent,
        title: "Admin | Borrowers list",
      },
      {
        path: AdditionalRoutes.FO_LIST,
        component: AdminFoListComponent,
        title: "Admin | FO list",
      },
      {
        path: AdditionalRoutes.STORES_LIST,
        component: AdminStoresListComponent,
        title: "Admin | Stores list",
      },
      {
        path: AdditionalRoutes.SURVEY_SETTINGS,
        component: AdminSurveySettingsComponent,
        title: "Admin | Survey settings",
      },
      {
        path: AdditionalRoutes.CALCULATOR,
        component: AdminCalculatorComponent,
        title: "Admin | Calculator",
      },
      {
        path: AdditionalRoutes.TICKETS,
        component: AdminTicketsComponent,
        title: "Admin | Tickets",
      },
      {
        path: AdditionalRoutes.SETTINGS,
        component: AdminSettingsComponent,
        title: "Admin | Settings",
      },
      {
        path: AdditionalRoutes.SUPPORT,
        component: AdminSupportComponent,
        title: "Admin | Support",
      },
      {
        path: MainRoutes.NOT_FOUND,
        component: NotFoundPageComponent,
        title: "Admin | Page not found",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})

export class AdminRoutingModule {
}

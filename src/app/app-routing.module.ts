import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainRoutes } from "@/app/shared/types/routes";
import { LoginComponent } from "@/app/pages/login/login.component";

const routes: Routes = [
  {
    path: MainRoutes.ADMIN,
    loadChildren: () => import("./pages/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: MainRoutes.BORROWER,
    loadChildren: () => import("./pages/borrower/borrower.module").then(m => m.BorrowerModule)
  },
  {
    path: MainRoutes.FO,
    loadChildren: () => import("./pages/fo/fo.module").then(m => m.FoModule)
  },
  {
    path: MainRoutes.STORE,
    loadChildren: () => import("./pages/store/store.module").then(m => m.StoreModule)
  },
  { path: MainRoutes.LOGIN, component: LoginComponent, title: "Login" },
  { path: MainRoutes.DEFAULT, redirectTo: MainRoutes.LOGIN, pathMatch: "full" },
  { path: MainRoutes.NOT_FOUND, redirectTo: MainRoutes.LOGIN },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

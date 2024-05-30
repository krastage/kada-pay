import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, ActivationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UserRoles } from "@/app/shared/types/user-roles";

@Component({
  selector: "admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnDestroy {
  public title: UserRoles = UserRoles.ADMIN;
  public isLoading = true;
  public isActiveRoute = true;
  private routerSubscription: Subscription = new Subscription();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        this.checkActiveRoute();
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  checkActiveRoute() {
    const currentRoute = this.activatedRoute.snapshot;
    const currentPath = currentRoute.routeConfig?.path;

    if (currentPath !== "**") {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    }
  }
}

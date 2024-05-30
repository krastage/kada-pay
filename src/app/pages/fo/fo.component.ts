import { Component, OnDestroy } from "@angular/core";
import { UserRoles } from "@/app/shared/types/user-roles";
import { Subscription } from "rxjs";
import { ActivatedRoute, ActivationEnd, Router } from "@angular/router";

@Component({
  selector: "app-fo",
  templateUrl: "./fo.component.html",
  styleUrls: ["./fo.component.scss"]
})
export class FoComponent implements OnDestroy {
  public title: UserRoles = UserRoles.FO;
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

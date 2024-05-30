import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "not-found-page",
  templateUrl: "./not-found-page.component.html",
  styleUrls: ["./not-found-page.component.scss"]
})
export class NotFoundPageComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  public timer: number = 10;
  public interval: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.setTimer();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  public setTimer() {
    this.interval = setInterval(() => {
      this.timer--;

      if (this.timer === 0) {
        clearInterval(this.interval);
        const baseUrl = this.router.url.split("/")[1];
        const redirectTo = `/${baseUrl}/statistics`;
        this.router.navigate([redirectTo]);
      }
    }, 1000);
  }
}

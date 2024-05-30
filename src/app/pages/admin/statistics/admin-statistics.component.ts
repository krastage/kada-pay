import { Component } from "@angular/core";
import { requestData } from "@/app/pages/admin/statistics/model/request.data";
import { summaryData } from "@/app/pages/admin/statistics/model/summary.data";


@Component({
  selector: "admin-statistics",
  templateUrl: "./admin-statistics.component.html",
  styleUrls: ["./admin-statistics.component.scss"]
})
export class AdminStatisticsComponent {
  public requestData = requestData;
  public summaryData = summaryData;
}

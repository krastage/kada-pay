import { Component } from '@angular/core';
import { requestData } from "@/app/pages/fo/statistics/model/request.data";

@Component({
  selector: 'fo-statistics',
  templateUrl: './fo-statistics.component.html',
  styleUrls: ['./fo-statistics.component.scss']
})
export class FoStatisticsComponent {
  public requestData = requestData;
}

import { Component } from '@angular/core';
import { requestData } from "@/app/pages/store/statistics/model/request.data";

@Component({
  selector: 'store-statistics',
  templateUrl: './store-statistics.component.html',
  styleUrls: ['./store-statistics.component.scss']
})
export class StoreStatisticsComponent {
  public requestData = requestData;
}

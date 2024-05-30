import { Component } from '@angular/core';
import { requestData } from "@/app/pages/borrower/statistics/model/request.data";

@Component({
  selector: 'borrower-statistics',
  templateUrl: './borrower-statistics.component.html',
  styleUrls: ['./borrower-statistics.component.scss']
})
export class BorrowerStatisticsComponent {
  public requestData = requestData;
}

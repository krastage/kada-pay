import { Component, Input } from "@angular/core";
import { RequestDTO, TimePeriodData } from "@/app/shared/types/request-dto";

@Component({
  selector: "statistics-item",
  templateUrl: "./statistics-item.component.html",
  styleUrls: ["./statistics-item.component.scss"]
})
export class StatisticsItemComponent {
  @Input() data!: RequestDTO;

  getPeriods(data: RequestDTO): TimePeriodData[] {
    return Object.values(data).filter(period => period && period.title);
  }
}

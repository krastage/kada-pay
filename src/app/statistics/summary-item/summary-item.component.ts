import { Component, Input } from "@angular/core";
import { SummaryDTO } from "@/app/shared/types/summary-dto";

@Component({
  selector: 'summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.scss']
})
export class SummaryItemComponent {
  @Input() data!: SummaryDTO;
}

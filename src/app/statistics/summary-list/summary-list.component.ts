import { Component, Input } from "@angular/core";
import { SummaryDTO } from "@/app/shared/types/summary-dto";

@Component({
  selector: 'summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.scss']
})
export class SummaryListComponent {
  @Input() data!: Record<string, SummaryDTO>;
  protected readonly Object = Object;
}

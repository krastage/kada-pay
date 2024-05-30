import { Component, Input } from "@angular/core";
import { RequestDTO } from "@/app/shared/types/request-dto";

@Component({
  selector: 'statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss']
})
export class StatisticsListComponent {
  @Input() data!: Record<string, RequestDTO>;
  protected readonly Object = Object;
}

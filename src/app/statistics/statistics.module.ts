import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsItemComponent } from './statistics-item/statistics-item.component';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { SummaryListComponent } from './summary-list/summary-list.component';
import { SummaryItemComponent } from './summary-item/summary-item.component';



@NgModule({
  declarations: [
    StatisticsItemComponent,
    StatisticsListComponent,
    SummaryListComponent,
    SummaryItemComponent
  ],
  exports: [
    StatisticsListComponent,
    SummaryListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatisticsModule { }

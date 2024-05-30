import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "primary-button",
  templateUrl: "./primary-button.component.html",
  styleUrls: ["./primary-button.component.scss"]
})
export class PrimaryButtonComponent {
  @Input() label!: string;
  @Input() className!: string;
  @Output() onClick = new EventEmitter<any>();

  public emitEvent() {
    this.onClick.emit();
  }
}

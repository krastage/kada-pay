import { Component } from "@angular/core";
import { HeaderService } from "@/app/header/services/header.service";

@Component({
  selector: "main-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  public inputData: string = "";

  constructor(private headerService: HeaderService) {
    this.inputData = this.headerService.getData();
  }

  public onSubmit() {
    this.headerService.setData(this.inputData);
    console.log("Data:", this.inputData);
  }
}

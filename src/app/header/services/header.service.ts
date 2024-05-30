import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HeaderService {
  public inputData: string = "";

  constructor() {
  }

  public getData() {
    return this.inputData;
  }

  public setData(data: string) {
    this.inputData = data;
  }
}

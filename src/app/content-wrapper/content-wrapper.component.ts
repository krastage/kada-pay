import { Component, Input } from "@angular/core";
import { UserRoles } from "@/app/shared/types/user-roles";

@Component({
  selector: "content-wrapper",
  templateUrl: "./content-wrapper.component.html",
  styleUrls: ["./content-wrapper.component.scss"]
})
export class ContentWrapperComponent {
  @Input() title!: UserRoles;
}

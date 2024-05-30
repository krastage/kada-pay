import { Component, Input } from "@angular/core";
import { UserRoles } from "@/app/shared/types/user-roles";
import { primaryLinks, secondaryLinks } from "@/app/sidebar/model/role-links";
import { IconType } from "@/app/shared/types/icon-types";

@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Input() userRole!: UserRoles;

  get primaryLinks() {
    return primaryLinks[this.userRole];
  }

  get secondaryLinks() {
    return secondaryLinks[this.userRole];
  }

  getIcon(iconType: IconType | undefined) {
    return iconType ? `/assets/img/${iconType}.svg` : null;
  }
}

import { UserRoles } from "@/app/shared/types/user-roles";
import { IconType } from "@/app/shared/types/icon-types";

export interface IRouteInfo {
  path: string;
  label?: string;
  icon?: IconType
}

export type RoleLink = {
  [key in UserRoles]: IRouteInfo[]
}
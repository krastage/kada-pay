import { AdditionalRoutes, MainRoutes } from '@/app/shared/types/routes';
import { RoleLink } from '@/app/shared/types/role-links-types';
import { UserRoles } from '@/app/shared/types/user-roles';
import { IconType } from '@/app/shared/types/icon-types';

export const primaryLinks: RoleLink = {
  [UserRoles.ADMIN]: [
    {
      path: AdditionalRoutes.STATISTICS,
      label: 'Статистика',
      icon: 'statistics' as IconType,
    },
    {
      path: AdditionalRoutes.BORROWERS_LIST,
      label: 'Заёмщики',
      icon: 'borrowers' as IconType,
    },
    {
      path: AdditionalRoutes.FO_LIST,
      label: 'Финансовые организации',
      icon: 'fo' as IconType,
    },
    {
      path: AdditionalRoutes.STORES_LIST,
      label: 'Магазины',
      icon: 'store' as IconType,
    },
    {
      path: AdditionalRoutes.SURVEY_SETTINGS,
      label: 'Настройки анкеты',
      icon: 'survey' as IconType,
    },
    {
      path: AdditionalRoutes.CALCULATOR,
      label: 'Калькулятор процентов',
      icon: 'calculator' as IconType,
    },
    {
      path: AdditionalRoutes.TICKETS,
      label: 'Заявки',
      icon: 'tickets' as IconType,
    },
  ],
  [UserRoles.BORROWER]: [
    {
      path: AdditionalRoutes.STATISTICS,
      label: 'Статистика',
      icon: 'statistics' as IconType,
    },
    {
      path: AdditionalRoutes.CALCULATOR,
      label: 'Калькулятор процентов',
      icon: 'calculator' as IconType,
    },
    {
      path: AdditionalRoutes.TICKETS,
      label: 'Заявки',
      icon: 'tickets' as IconType,
    },
  ],
  [UserRoles.STORE]: [
    {
      path: AdditionalRoutes.STATISTICS,
      label: 'Статистика',
      icon: 'statistics' as IconType,
    },
    {
      path: AdditionalRoutes.CALCULATOR,
      label: 'Калькулятор процентов',
      icon: 'calculator' as IconType,
    },
    {
      path: AdditionalRoutes.TICKETS,
      label: 'Заявки',
      icon: 'tickets' as IconType,
    },
  ],
  [UserRoles.FO]: [
    {
      path: AdditionalRoutes.STATISTICS,
      label: 'Статистика',
      icon: 'statistics' as IconType,
    },
    {
      path: AdditionalRoutes.CALCULATOR,
      label: 'Калькулятор процентов',
      icon: 'calculator' as IconType,
    },
    {
      path: AdditionalRoutes.TICKETS,
      label: 'Заявки',
      icon: 'tickets' as IconType,
    },
  ],
};

export const secondaryLinks: RoleLink = {
  [UserRoles.ADMIN]: [
    {
      path: AdditionalRoutes.SETTINGS,
      label: 'Настройки аккаунта',
      icon: 'account' as IconType,
    },
    {
      path: AdditionalRoutes.SUPPORT,
      label: 'Поддержка',
      icon: 'support' as IconType,
    },
  ],
  [UserRoles.BORROWER]: [
    {
      path: AdditionalRoutes.SETTINGS,
      label: 'Настройки аккаунта',
      icon: 'account' as IconType,
    },
    {
      path: AdditionalRoutes.SUPPORT,
      label: 'Поддержка',
      icon: 'support' as IconType,
    },
  ],
  [UserRoles.STORE]: [
    {
      path: AdditionalRoutes.SETTINGS,
      label: 'Настройки аккаунта',
      icon: 'account' as IconType,
    },
    {
      path: AdditionalRoutes.SUPPORT,
      label: 'Поддержка',
      icon: 'support' as IconType,
    },
  ],
  [UserRoles.FO]: [
    {
      path: AdditionalRoutes.SETTINGS,
      label: 'Настройки аккаунта',
      icon: 'account' as IconType,
    },
    {
      path: AdditionalRoutes.SUPPORT,
      label: 'Поддержка',
      icon: 'support' as IconType,
    },
  ],
};

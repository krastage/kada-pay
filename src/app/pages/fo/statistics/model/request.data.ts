import { RequestDTO } from "@/app/shared/types/request-dto";

export const requestData: Record<string, RequestDTO> = {
  all: {
    title: "Все заявки",
    today: {
      title: "За сегодня",
      requests: 190,
      amount: 15436890
    },
    sevenDays: {
      title: "За 7 дней",
      requests: 0,
      amount: 0
    },
    month: {
      title: "За месяц",
      requests: 0,
      amount: 0
    },
    allTime: {
      title: "За всё время",
      requests: 0,
      amount: 0
    }
  },
  rejected: {
    title: "Отказанные заявки",
    today: {
      title: "За сегодня",
      requests: 156,
      amount: 10899680
    },
    sevenDays: {
      title: "За 7 дней",
      requests: 0,
      amount: 0
    },
    month: {
      title: "За месяц",
      requests: 0,
      amount: 0
    },
    allTime: {
      title: "За всё время",
      requests: 0,
      amount: 0
    }
  },
  approved: {
    title: "Одобренные заявки",
    today: {
      title: "За сегодня",
      requests: 34,
      amount: 4537210
    },
    sevenDays: {
      title: "За 7 дней",
      requests: 0,
      amount: 0
    },
    month: {
      title: "За месяц",
      requests: 0,
      amount: 0
    },
    allTime: {
      title: "За всё время",
      requests: 0,
      amount: 0
    }
  },
  signed: {
    title: "Подписанные заявки",
    today: {
      title: "За сегодня",
      requests: 27,
      amount: 2937210
    },
    sevenDays: {
      title: "За 7 дней",
      requests: 0,
      amount: 0
    },
    month: {
      title: "За месяц",
      requests: 0,
      amount: 0
    },
    allTime: {
      title: "За всё время",
      requests: 0,
      amount: 0
    }
  },
};



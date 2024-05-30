export interface TimePeriodData {
  title: string;
  requests: number;
  amount: number;
}

export interface RequestDTO {
  title: string;
  today: TimePeriodData;
  sevenDays: TimePeriodData;
  month: TimePeriodData;
  allTime: TimePeriodData;
}
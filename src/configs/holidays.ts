export enum HOLIDAY {
  NEW_YEARS_DAY = "New Year's Day",
  SPRING_FESTIVAL = "Spring Festival",
  TOMB_SWEEPING_DAY = "Tomb-sweeping Day",
  LABOUR_DAY = "Labour Day",
  DRAGON_BOAT_FESTIVAL = "Dragon Boat Festival",
  NATIONAL_DAY = "National Day",
  MID_AUTUMN_FESTIVAL = "Mid-autumn Festival",
}

export interface HolidayDetails {
  english: HOLIDAY;
  chinese: string;
}

export const holidayDetails: { [key in HOLIDAY]: HolidayDetails } = {
  [HOLIDAY.NEW_YEARS_DAY]: {
    english: HOLIDAY.NEW_YEARS_DAY,
    chinese: "元旦",
  },
  [HOLIDAY.SPRING_FESTIVAL]: {
    english: HOLIDAY.SPRING_FESTIVAL,
    chinese: "春节",
  },
  [HOLIDAY.TOMB_SWEEPING_DAY]: {
    english: HOLIDAY.TOMB_SWEEPING_DAY,
    chinese: "清明",
  },
  [HOLIDAY.LABOUR_DAY]: {
    english: HOLIDAY.LABOUR_DAY,
    chinese: "劳动节",
  },
  [HOLIDAY.DRAGON_BOAT_FESTIVAL]: {
    english: HOLIDAY.DRAGON_BOAT_FESTIVAL,
    chinese: "端午",
  },
  [HOLIDAY.NATIONAL_DAY]: {
    english: HOLIDAY.NATIONAL_DAY,
    chinese: "国庆节",
  },
  [HOLIDAY.MID_AUTUMN_FESTIVAL]: {
    english: HOLIDAY.MID_AUTUMN_FESTIVAL,
    chinese: "中秋",
  },
};

export enum DAY_TYPE {
  HOLIDAY = "holiday",
  REST_DAY = "rest-day",
  WORKDAY = "workday",
}

export const holidays = new Map([
  // 2025年法定节假日
  ["2025-01-01", HOLIDAY.NEW_YEARS_DAY],
  ["2025-01-29", HOLIDAY.SPRING_FESTIVAL],
  ["2025-04-04", HOLIDAY.TOMB_SWEEPING_DAY],
  ["2025-05-01", HOLIDAY.LABOUR_DAY],
  ["2025-05-31", HOLIDAY.DRAGON_BOAT_FESTIVAL],
  ["2025-10-01", HOLIDAY.NATIONAL_DAY],
  ["2025-10-06", HOLIDAY.MID_AUTUMN_FESTIVAL],
]);

export const restDays = new Map([
  // 2024年休息日
  ["2023-12-30", HOLIDAY.NEW_YEARS_DAY],
  ["2023-12-31", HOLIDAY.NEW_YEARS_DAY],
  ["2024-02-11", HOLIDAY.SPRING_FESTIVAL],
  ["2024-02-12", HOLIDAY.SPRING_FESTIVAL],
  ["2024-02-13", HOLIDAY.SPRING_FESTIVAL],
  ["2024-02-14", HOLIDAY.SPRING_FESTIVAL],
  ["2024-02-15", HOLIDAY.SPRING_FESTIVAL],
  ["2024-02-16", HOLIDAY.SPRING_FESTIVAL],
  ["2024-02-17", HOLIDAY.SPRING_FESTIVAL],
  ["2024-04-05", HOLIDAY.TOMB_SWEEPING_DAY],
  ["2024-04-06", HOLIDAY.TOMB_SWEEPING_DAY],
  ["2024-05-02", HOLIDAY.LABOUR_DAY],
  ["2024-05-03", HOLIDAY.LABOUR_DAY],
  ["2024-05-04", HOLIDAY.LABOUR_DAY],
  ["2024-05-05", HOLIDAY.LABOUR_DAY],
  ["2024-06-08", HOLIDAY.DRAGON_BOAT_FESTIVAL],
  ["2024-06-09", HOLIDAY.DRAGON_BOAT_FESTIVAL],
  ["2024-09-15", HOLIDAY.MID_AUTUMN_FESTIVAL],
  ["2024-09-16", HOLIDAY.MID_AUTUMN_FESTIVAL],
  ["2024-10-02", HOLIDAY.NATIONAL_DAY],
  ["2024-10-03", HOLIDAY.NATIONAL_DAY],
  ["2024-10-04", HOLIDAY.NATIONAL_DAY],
  ["2024-10-05", HOLIDAY.NATIONAL_DAY],
  ["2024-10-06", HOLIDAY.NATIONAL_DAY],
  ["2024-10-07", HOLIDAY.NATIONAL_DAY],
  // 2025年休息日
  ["2025-01-28", HOLIDAY.SPRING_FESTIVAL],
  ["2025-01-29", HOLIDAY.SPRING_FESTIVAL],
  ["2025-01-30", HOLIDAY.SPRING_FESTIVAL],
  ["2025-01-31", HOLIDAY.SPRING_FESTIVAL],
  ["2025-02-01", HOLIDAY.SPRING_FESTIVAL],
  ["2025-02-02", HOLIDAY.SPRING_FESTIVAL],
  ["2025-02-03", HOLIDAY.SPRING_FESTIVAL],
  ["2025-02-04", HOLIDAY.SPRING_FESTIVAL],
  ["2025-04-05", HOLIDAY.TOMB_SWEEPING_DAY],
  ["2025-04-06", HOLIDAY.TOMB_SWEEPING_DAY],
  ["2025-05-02", HOLIDAY.LABOUR_DAY],
  ["2025-05-03", HOLIDAY.LABOUR_DAY],
  ["2025-05-04", HOLIDAY.LABOUR_DAY],
  ["2025-05-05", HOLIDAY.LABOUR_DAY],
  ["2025-06-01", HOLIDAY.DRAGON_BOAT_FESTIVAL],
  ["2025-06-02", HOLIDAY.DRAGON_BOAT_FESTIVAL],
  ["2025-10-02", HOLIDAY.NATIONAL_DAY],
  ["2025-10-03", HOLIDAY.NATIONAL_DAY],
  ["2025-10-04", HOLIDAY.NATIONAL_DAY],
  ["2025-10-05", HOLIDAY.NATIONAL_DAY],
  ["2025-10-06", HOLIDAY.MID_AUTUMN_FESTIVAL],
  ["2025-10-07", HOLIDAY.NATIONAL_DAY],
  ["2025-10-08", HOLIDAY.NATIONAL_DAY],
]);

export const workdays = new Map([
  // 2024年调休工作日
  ["2024-02-04", HOLIDAY.SPRING_FESTIVAL],
  ["2024-02-18", HOLIDAY.SPRING_FESTIVAL],
  ["2024-04-07", HOLIDAY.TOMB_SWEEPING_DAY],
  ["2024-04-28", HOLIDAY.LABOUR_DAY],
  ["2024-05-11", HOLIDAY.LABOUR_DAY],
  ["2024-09-14", HOLIDAY.MID_AUTUMN_FESTIVAL],
  ["2024-09-29", HOLIDAY.NATIONAL_DAY],
  ["2024-10-12", HOLIDAY.NATIONAL_DAY],
  // 2025年调休工作日
  ["2025-01-26", HOLIDAY.SPRING_FESTIVAL],
  ["2025-02-08", HOLIDAY.SPRING_FESTIVAL],
  ["2025-04-27", HOLIDAY.LABOUR_DAY],
  ["2025-09-28", HOLIDAY.NATIONAL_DAY],
  ["2025-10-11", HOLIDAY.NATIONAL_DAY],
]);

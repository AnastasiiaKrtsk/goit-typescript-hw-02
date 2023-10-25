/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: Day): boolean {
  return day === Day.SATURDAY || day === Day.SUNDAY;
}

const today = Day.SUNDAY;
const isWeekendToday = isWeekend(today);
console.log("Weekend? - ${isWeekendToday}");

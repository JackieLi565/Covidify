export default function checkValidDate(input) {
  const parts = input.split("-");
  const day = parseInt(parts[2], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[0], 10);
  const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

  // Array of days in each month (accounting for leap year)
  const daysInMonth = [
    31,
    isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  if (month < 1 || month > 12) {
    return false;
  }

  if (day < 1 || day > daysInMonth[month - 1]) {
    return false;
  }

  return true;
}

export function checkMatch(input) {
  const PT = ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"];
  
  const match = PT.includes(input);
  
  return match ? true : false;
}
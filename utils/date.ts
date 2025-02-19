export function getMonthName(d: Date) {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][d.getMonth()];
}

export function getWeekday(d: Date) {
  return d.getDay() === 0 ? 6 : d.getDay() - 1;
}

export function getYearName(d: Date) {
  return d.getFullYear();
}

export function getDayName(d: Date) {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][d.getDay()];
}

export function getDayNumber(d: Date) {
  const date = d.getDate();
  return date < 10 ? `0${date}` : date;
}

export function getTime(d: Date) {
  const hours = d.getHours();
  const minutes = d.getMinutes();
  return hours > 12 ? `${hours - 12}:${minutes} pm` : `${hours}:${minutes} am `;
}

export function getMonthDaysByDate(d: Date): Date[] {
  const daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(d.getFullYear(), d.getMonth(), i));
  }
  return days;
}

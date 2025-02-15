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

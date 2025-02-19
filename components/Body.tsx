"use client";

import { useDayContext } from "@/context/day";
import { getDayNumber, getMonthDaysByDate, getWeekday } from "@/utils/date";

export default function Body() {
  const {
    state: { selectedDay, currentTime },
    dispatch: dispatchDay,
  } = useDayContext();

  const weekDayStart = getWeekday(
    new Date(selectedDay.getFullYear(), selectedDay.getMonth(), 1)
  );

  const days = getMonthDaysByDate(selectedDay);

  return (
    <div className="w-full h-full flex flex-col select-none bg-stone-900">
      <div className="grid grid-cols-7 w-full p-4 pb-6  h-fit text-center">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="text-violet-100 font-semibold text-lg h-fit"
          >
            {day}
          </div>
        ))}
      </div>
      <div
        className={`grid grid-cols-7 gap-4 w-full p-6 h-full pt-0
        ${days.length + weekDayStart > 35 ? "grid-rows-6" : "grid-rows-5"}
      `}
      >
        {weekDayStart > 0 &&
          Array.from({ length: weekDayStart }).map((_, index) => (
            <div key={index} className="h-14"></div>
          ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-4 text-violet-100 rounded font-semibold text-lg
            ${
              day.getDate() === selectedDay.getDate()
                ? "bg-violet-500 saturate-50"
                : day.getDate() === currentTime.getDate() &&
                  day.getMonth() === currentTime.getMonth() &&
                  day.getFullYear() === currentTime.getFullYear()
                ? "bg-stone-600"
                : "bg-stone-800"
            }`}
            onClick={() =>
              dispatchDay({ type: "SET_SELECTED_DAY", payload: day })
            }
          >
            <span>{getDayNumber(day)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

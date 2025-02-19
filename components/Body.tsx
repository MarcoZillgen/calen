"use client";

import { useDayContext } from "@/context/day";
import { getDayNumber, getMonthDaysByDate } from "@/utils/date";

export default function Body() {
  const {
    state: { selectedDay, currentTime },
    dispatch: dispatchDay,
  } = useDayContext();

  const days = getMonthDaysByDate(selectedDay);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-7 w-full px-4 py-6 bg-stone-900 h-fit text-center">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"].map((day) => (
          <div
            key={day}
            className="text-white font-semibold text-lg h-fit"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 grid-rows-5 gap-4 w-full p-6 bg-stone-900 h-full pt-0">
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-4 text-white rounded-xl
            font-semibold text-lg
            
            ${
              day.getDate() === selectedDay.getDate()
                ? "bg-emerald-600"
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
            <span className="">{getDayNumber(day)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

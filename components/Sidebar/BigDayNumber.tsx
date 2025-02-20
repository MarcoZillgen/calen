import React from "react";
import { useDayContext } from "@/context/day";
import { getDayNumber } from "@/utils/date";

export default function BigDayNumber() {
  const {
    state: { selectedDay },
  } = useDayContext();

  return (
    <div className="w-full relative overflow-hidden select-none py-[12rem] h-[16rem] cursor-pointer">
      <div className="text-[16rem] text-center select-none font-bold absolute top-0 left-0 w-full">
        {getDayNumber(selectedDay)}
      </div>
    </div>
  );
}

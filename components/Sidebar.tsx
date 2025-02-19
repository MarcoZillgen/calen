"use client";

import TopMonthBar from "./Sidebar/TopMonthBar";
import BigDayNumber from "./Sidebar/BigDayNumber";
import EventList from "./Sidebar/EventList";

export default function Sidebar() {
  return (
    <div className="w-[600px] h-full overflow-hidden bg-violet-500 saturate-50 p-4">
      <TopMonthBar />
      <BigDayNumber />
      <EventList />
    </div>
  );
}

"use client";

import TopMonthBar from "./Sidebar/TopMonthBar";
import BigDayNumber from "./Sidebar/BigDayNumber";
import EventList from "./Sidebar/EventList";

export default function Sidebar() {
  return (
    <div className="w-[600px] h-full overflow-hidden bg-emerald-600 p-4">
      <TopMonthBar />
      <BigDayNumber />
      <EventList />
    </div>
  );
}

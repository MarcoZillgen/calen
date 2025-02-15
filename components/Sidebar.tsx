"use client";

import TopMonthBar from "./Sidebar/TopMonthBar";
import BigDayNumber from "./Sidebar/BigDayNumber";
import EventList from "./Sidebar/EventList";

export default function Sidebar() {
  return (
    <div className="w-1/4 h-full overflow-hidden bg-teal-500 p-4">
      <TopMonthBar />
      <BigDayNumber />
      <EventList />
    </div>
  );
}

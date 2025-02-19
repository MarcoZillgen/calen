import { useDayContext } from "@/context/day";
import { getMonthName, getYearName } from "@/utils/date";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TopMonthBar() {
  const {
    state: { selectedDay },
    dispatch: dispatchDay,
  } = useDayContext();

  return (
    <div className="flex justify-between">
      <button onClick={() => dispatchDay({ type: "SELECT_PREV_MONTH" })}>
        <ChevronLeft />
      </button>
      <span className="text-xl font-semibold select-none">
        {getMonthName(selectedDay)} {getYearName(selectedDay)}
      </span>
      <button onClick={() => dispatchDay({ type: "SELECT_NEXT_MONTH" })}>
        <ChevronRight />
      </button>
    </div>
  );
}

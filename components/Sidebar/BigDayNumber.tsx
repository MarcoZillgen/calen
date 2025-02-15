import { useDayContext } from "@/context/day";
import { getDayNumber } from "@/utils/date";

export default function BigDayNumber() {
  const {
    state: { selectedDay },
  } = useDayContext();

  return (
    <div className="w-full grid place-items-center">
      <span className="text-[16rem] select-none">
        {getDayNumber(selectedDay)}
      </span>
    </div>
  );
}

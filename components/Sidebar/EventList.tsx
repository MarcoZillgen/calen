import { useDayContext } from "@/context/day";
import { useEventContext } from "@/context/event";
import Event from "./Event";
import { dayStart, dayEnd } from "@/utils/date";

export default function EventList() {
  const { state: events } = useEventContext();
  const {
    state: { selectedDay },
  } = useDayContext();

  const filteredEvents = events.filter((event) => {
    if (Array.isArray(event.date)) {
      return (
        dayStart(selectedDay).getTime() <= event.date[1].getTime() &&
        dayEnd(selectedDay).getTime() >= event.date[0].getTime()
      );
    }
    return (
      dayStart(selectedDay).getTime() <= event.date.getTime() &&
      dayEnd(selectedDay).getTime() >= event.date.getTime()
    );
  });

  return (
    <div className="select-none">
      {filteredEvents.length === 0 ? (
        <div className="text-xl font-semibold">No events</div>
      ) : (
        <div className="text-xl font-semibold ">Events</div>
      )}
      <div className="overflow-y-auto max-h-96">
        {filteredEvents.map((event, o) => (
          <Event key={o} {...event} />
        ))}
      </div>
    </div>
  );
}

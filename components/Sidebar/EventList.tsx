import { useDayContext } from "@/context/day";
import { useEventContext } from "@/context/event";
import { getTime } from "@/utils/date";

export default function EventList() {
  const { state: events } = useEventContext();
  const {
    state: { selectedDay },
  } = useDayContext();

  const filteredEvents = events.filter((event) => {
    if (Array.isArray(event.date)) {
      return selectedDay >= event.date[0] && selectedDay <= event.date[1];
    }
    return selectedDay.toDateString() === event.date.toDateString();
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

function Event({
  title,
  description,
  color,
  date,
}: {
  title: string;
  description: string;
  color: string;
  date: Date | [Date, Date];
}) {
  return (
    <div className="relative bg-emerald-400 rounded-lg mt-4 overflow-clip">
      <div
        className="absolute l-0 t-0 w-[5px] h-full"
        style={{ backgroundColor: color }}
      ></div>
      <div className="relative px-4 py-2">
        <div className="flex justify-between items-center text-lg font-bold">
          <h3 className="">{title}</h3>
          {Array.isArray(date) && (
            <div className="font-normal text-sm">
              {getTime(date[0])} - {getTime(date[1])}
            </div>
          )}
        </div>
        <p className="text-sm truncate h-fit">{description}</p>
      </div>
    </div>
  );
}

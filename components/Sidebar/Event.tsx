import { getTime } from "@/utils/date";

export default function Event({
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
    <div className="relative bg-violet-100/40 rounded mt-4 overflow-clip">
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

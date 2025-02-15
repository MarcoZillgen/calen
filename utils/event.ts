import Event from "@/types/event";

export function getEvents() {
  return [
    {
      id: "1",
      title: "Event 1",
      date: new Date(),
      description: "This is a description",
      color: "red",
    },
    {
      id: "2",
      title: "Event 2",
      date: new Date(),
      description: "This is a description",
      color: "blue",
    },
    {
      id: "3",
      title: "Event 3",
      date: new Date(),
      description: "This is a description",
      color: "green",
    },
    {
      id: "4",
      title: "Event 4",
      date: [new Date(), new Date(new Date().getTime() + 1000 * 60 * 60 * 4)],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "yellow",
    },
  ] as Event[];
}

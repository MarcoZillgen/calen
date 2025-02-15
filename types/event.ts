type Event = {
  id: string;
  title: string;
  description: string;
  color: string;
  date: Date | [Date, Date]; // either an event is for one full day or it is specified from when to when
};

export default Event;

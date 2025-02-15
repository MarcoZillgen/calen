"use client";

import { createContext, useContext, useMemo, useReducer } from "react";
import Event from "@/types/event";
import { getEvents } from "@/utils/event";

type EventAction =
  | { type: "ADD_EVENT"; payload: Event }
  | { type: "DELETE_EVENT"; payload: string }
  | { type: "UPDATE_COLOR"; payload: { id: string; color: string } };

function eventReducer(state: Event[], action: EventAction): Event[] {
  switch (action.type) {
    case "UPDATE_COLOR":
      return state.map((event) => {
        return event.id === action.payload.id
          ? { ...event, color: action.payload.color }
          : event;
      });
    case "DELETE_EVENT":
      return state.filter((ev) => ev.id != action.payload);
    case "ADD_EVENT":
      return [...state, action.payload];
    default:
      throw new Error(`Unhandled action type: ${JSON.stringify(action)}`);
  }
}

const EventContext = createContext<
  { state: Event[]; dispatch: React.Dispatch<EventAction> } | undefined
>(undefined);

function EventContainer({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(eventReducer, getEvents());

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
}

function useEventContext() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
}

export { EventContext, EventContainer, useEventContext };

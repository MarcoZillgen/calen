"use client";

import { prevMonth, nextMonth, prevDay, nextDay } from "@/utils/date";
import { createContext, useContext, useReducer } from "react";

type DayState = {
  currentTime: Date;
  selectedDay: Date;
};

type DayAction =
  | { type: "SET_TODAY"; payload: Date }
  | { type: "SET_SELECTED_DAY"; payload: Date }
  | { type: "RESET_SELECTED_DAY" }
  | { type: "SELECT_PREV_MONTH" }
  | { type: "SELECT_NEXT_MONTH" }
  | { type: "SELECT_PREV_DAY" }
  | { type: "SELECT_NEXT_DAY" };

function dayReducer(state: DayState, action: DayAction): DayState {
  switch (action.type) {
    case "SET_TODAY":
      return { ...state, currentTime: action.payload };
    case "SET_SELECTED_DAY":
      return { ...state, selectedDay: action.payload };
    case "RESET_SELECTED_DAY":
      return { ...state, selectedDay: state.currentTime };
    case "SELECT_PREV_MONTH":
      return {
        ...state,
        selectedDay: prevMonth(state.selectedDay),
      };
    case "SELECT_NEXT_MONTH":
      return {
        ...state,
        selectedDay: nextMonth(state.selectedDay),
      };
    case "SELECT_PREV_DAY":
      return {
        ...state,
        selectedDay: prevDay(state.selectedDay),
      };
    case "SELECT_NEXT_DAY":
      return {
        ...state,
        selectedDay: nextDay(state.selectedDay),
      };
    default:
      throw new Error(`Unhandled action type: ${JSON.stringify(action)}`);
  }
}

const DayContext = createContext<
  { state: DayState; dispatch: React.Dispatch<DayAction> } | undefined
>(undefined);

function DayContainer({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(dayReducer, {
    currentTime: new Date(),
    selectedDay: new Date(),
  });
  return (
    <DayContext.Provider value={{ state, dispatch }}>
      {children}
    </DayContext.Provider>
  );
}

function useDayContext() {
  const context = useContext(DayContext);
  if (!context) {
    throw new Error("useDayContext must be used within a DayProvider");
  }
  return context;
}

export { DayContext, DayContainer, useDayContext };

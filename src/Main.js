import React, { useReducer } from "react";
import BookingPage from "./components/BookingPage";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Placeholder for logic to update times based on the selected date
      return initializeTimes();
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Main;

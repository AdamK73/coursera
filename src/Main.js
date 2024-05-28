import React, { useReducer, useEffect } from "react";
import BookingPage from "./components/BookingPage";

const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0];
  return window.fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return window.fetchAPI(action.date);
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    dispatch({ type: "UPDATE_TIMES", date: today });
  }, []);

  return (
    <div>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Main;

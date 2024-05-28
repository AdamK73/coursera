import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <div>
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default BookingPage;

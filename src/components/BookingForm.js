import React, { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ date, time, guests, occasion });
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", date: newDate });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes &&
          availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Submit reservation</button>
    </form>
  );
};

export default BookingForm;

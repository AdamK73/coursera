import React, { useState, useEffect } from "react";
import "../styles/BookingForm.css";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (date && time && guests >= 1 && occasion) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    const success = window.submitAPI(formData);
    if (success) {
      alert("Reservation successful!");
    } else {
      alert("Reservation failed. Please try again.");
    }
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
      noValidate
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        aria-label="Choose date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        aria-label="Choose time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
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
        aria-label="Number of guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        aria-label="Occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button
        type="submit"
        aria-label="Submit reservation"
        disabled={!isFormValid}
      >
        Submit reservation
      </button>
    </form>
  );
};

export default BookingForm;

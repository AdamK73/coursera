import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";

// Import components
import Nav from "./components/Nav";
import CallToAction from "./components/CallToAction";
import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import Specials from "./components/Specials";
import CustomersSay from "./components/CustomersSay";
import Chicago from "./components/Chicago";

function App() {
  return (
    <Router>
      <>
        <Helmet>
          <meta
            name="description"
            content="Welcome to the Little Lemon restaurant application. Enjoy our delicious menu and great atmosphere."
          />
          <meta property="og:title" content="Little Lemon Restaurant" />
          <meta
            property="og:description"
            content="Experience the best dining at Little Lemon restaurant. Enjoy our wide variety of dishes and excellent service."
          />
          <meta
            property="og:image"
            content="https://via.placeholder.com/1200x630.png?text=Little+Lemon+OG+Image"
          />
          <title>Little Lemon Restaurant</title>
        </Helmet>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;

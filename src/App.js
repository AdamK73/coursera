import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";

import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Main from "./Main";

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
            <Route path="/booking" element={<Main />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;

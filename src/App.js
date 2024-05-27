import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
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
      <header>
        <img
          src="https://via.placeholder.com/150x50.png?text=Little+Lemon+Logo"
          alt="Little Lemon Logo"
        />
      </header>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Welcome to Little Lemon</h1>
        <p>This is a simplified version of the React app.</p>
      </main>
      <footer>
        <div>
          <img
            src="https://via.placeholder.com/100x30.png?text=Little+Lemon+Logo"
            alt="Little Lemon Logo"
          />
        </div>
        <div>
          <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>Welcome to your favorite plant shop 🌱</p>
      <button onClick={() => alert("Welcome!")}>
        Get Started
      </button>
    </div>
  );
}

export default App;

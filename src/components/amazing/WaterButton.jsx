import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WaterButton.css"; // CSS animation file

export default function WaterButton() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate("/water-page"); // Navigate after animation ends
    }, 2000); // Matches animation duration in CSS
  };

  return (
    <button
      className={`water-button ${isClicked ? "drain" : ""}`}
      onClick={handleClick}
    >
      <span className="button-text">Water Test</span>
      <span className="water"></span>
    </button>
  );
}

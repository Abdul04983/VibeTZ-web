import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const dayTextColors = ["#3D5AFE", "#FF4081", "#4CAF50", "#FFC107", "#673AB7"];
const nightTextColors = ["#FF4081", "#00E676", "#FFC107", "#40C4FF", "#E040FB"];

export const ThemeProvider = ({ children }) => {
  const [textColor, setTextColor] = useState(dayTextColors[0]);

  const generateColor = () => {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;
    const colors = isNight ? nightTextColors : dayTextColors;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTextColor(randomColor);
  };

  useEffect(() => {
    generateColor(); // on load

    const interval = setInterval(() => {
      generateColor();
    }, 60 * 60 * 1000); // kila saa moja

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeContext.Provider value={{ textColor, generateColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

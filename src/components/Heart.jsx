import React, { useEffect, useState } from "react";
import "./HeartAnimation.css";

export default function HeartAnimation() {
  const [showText, setShowText] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 2500);
    const arrowTimer = setTimeout(() => setShowArrow(true), 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(arrowTimer);
    };
  }, []);

  return (
    <div className="heart-container">
      <svg
        viewBox="0 0 200 180"
        className="heart-svg"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#ff69b4" />
          </linearGradient>
        </defs>
        <path
          d="M100 170
             L20 90
             A40 40 0 0 1 100 30
             A40 40 0 0 1 180 90
             Z"
          stroke="url(#grad)"
          strokeWidth="5"
          fill="none"
          className="heart-path"
        />
      </svg>

      {showArrow && (
        <div className="arrow"></div>
      )}

      {showText && (
        <h1 className="names">David + Danae</h1>
      )}
    </div>
  );
}

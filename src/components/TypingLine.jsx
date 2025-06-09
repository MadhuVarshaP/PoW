import React, { useEffect, useState } from "react";

export function TypingLine({ text, delay = 0, speed = 100, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    let timeout;
    if (started && displayed.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, text, speed, started]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="animate-pulse">█</span>
      )}
    </span>
  );
}

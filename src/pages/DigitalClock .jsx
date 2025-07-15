import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div className="clock-container">
      <h1>Digital Clock</h1>
      <div className="clock-time">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default DigitalClock;

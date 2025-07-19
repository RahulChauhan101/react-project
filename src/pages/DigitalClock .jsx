import React, { useState, useEffect } from 'react';
import './DigitalClock.css';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate_month = `${time.getDate().toString().padStart(2, '0')}/${(time.getMonth() + 1).toString().padStart(2, '0')}/${time.getFullYear()}`;
   
  const formattedDate = `${time.getDate().toString().padStart(2, '0')}`;

  return (
    <div className="clock-container">
      <h1>Digital + Analog Clock</h1>

<div className='Clock-date'>
           <div className="analog-clock">
        <p>React</p>
        <span>{time.toLocaleTimeString()}</span>
        <h5>{formattedDate}</h5>
        <Clock value={time} />
      </div>

<div>      <div className="clock-time">{time.toLocaleTimeString()}</div>
      <div className="clock-date">{formattedDate_month}</div>
      </div>
</div>
    </div>
  );
};

export default DigitalClock;

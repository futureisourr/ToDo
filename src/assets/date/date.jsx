import React, { useState, useEffect } from 'react';
import './date.css'

const DayCounter = () => {
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    const updateCurrentDay = () => {
      const options = {
        weekday: 'short',
        day: 'numeric',
      };
      const today = new Date();
      const formattedDay = today.toLocaleDateString('en-US', options);
      setCurrentDay(formattedDay);
    };

    updateCurrentDay();
    const midnightUpdateInterval = setInterval(() => {
      updateCurrentDay();
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(midnightUpdateInterval);
  }, []);

  return (
    <div className='current-day'>
      <h1>{currentDay}</h1>
    </div>
  );
};

export default DayCounter;

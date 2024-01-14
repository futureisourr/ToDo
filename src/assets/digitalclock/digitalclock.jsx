import React, { useState, useEffect } from 'react';
import './digitalclock.css'


const Clock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <div className='current-time'>
      <h1>{currentTime}</h1>
    </div>
  );
};

export default Clock
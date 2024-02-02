import React, { useState } from "react";
import './App.css';

function App() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  const handleButtonClick = () => {
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);

    generateTimeSlots(startTime, endTime);
  };

  const generateTimeSlots = (start, end) => {
    // Convert start and end times to minutes
    const startTimeInMinutes = convertTimeToMinutes(start);
    const endTimeInMinutes = convertTimeToMinutes(end);
  

    console.log(start)
    console.log(end)

    console.log(startTimeInMinutes)
    console.log(endTimeInMinutes)

    // Define the duration for each time slot (10 minutes)
    const slotDuration = 10;
  
    // Array to store the generated time slots
    const slots = [];
  
    // Generate time slots at 10-minute intervals
    for (let currentTime = startTimeInMinutes; currentTime <= endTimeInMinutes; currentTime += slotDuration) {
      // Convert currentTime back to hh:mm format
      const formattedTime = convertMinutesToTime(currentTime);
      console.log("currentTime"+currentTime)
      console.log("formattesTime"+formattedTime)

      slots.push(formattedTime);
    }


    if (slots.length > 0 && slots[slots.length - 1] !== end) {
      // If not, add the exact end time as the last slot
      slots.push(end);
    }
  
  
    setTimeSlots(slots);
  };
  
  const convertTimeToMinutes = (time) => {
    const [hours, minutes] = time.split(":");
    return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
  };
  
  const convertMinutesToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    // return ${String(hours).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")};
  };
  
  

  return (
    <div className="App">
      <input 
        type='time' 
        value={startTime} 
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input 
        type='time' 
        value={endTime} 
        onChange={(e) => setEndTime(e.target.value)}
      />

      <input 
        type='button' 
        value={"click"} 
        onClick={handleButtonClick}
      />

      {startTime && <p>Start Time: {startTime}</p>}
      {endTime && <p>End Time: {endTime}</p>}

      {timeSlots.length > 0 && (
        <div>
          <h3>Time Slots:</h3>
          {timeSlots.map((slot, index) => (
            <p key={index}>{slot}</p>
          ))}
          <p>Total Slots: {timeSlots.length}</p>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import Timezone from './Timezone';
import Slider from './Slider';
import Datepicker from './Datepicker';
import '../style/TimeZoneConverter.css';  // Import component-specific styles

const TIMEZONES = [
  { name: 'UTC', id: 'UTC' },
  { name: 'IST', id: 'Asia/Kolkata' },
  { name: 'EST', id: 'America/New_York' },
  { name: 'PST', id: 'America/Los_Angeles' },
  // Add more time zones here
];

function TimeZoneConverter() {
  const [fromZone, setFromZone] = useState(TIMEZONES[0]);
  const [toZone, setToZone] = useState(TIMEZONES[1]);
  const [currentTime, setCurrentTime] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(moment());

  useEffect(() => {
    const updateCurrentTime = () => setCurrentTime(moment());
    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleFromZoneChange = (e) => setFromZone(TIMEZONES.find(zone => zone.id === e.target.value));
  const handleToZoneChange = (e) => setToZone(TIMEZONES.find(zone => zone.id === e.target.value));
  const handleDateChange = (date) => setSelectedDate(moment(date));

  const convertedTime = currentTime.clone().tz(toZone.id);

  return (
    <div className="time-zone-converter">
      <h1>Time Zone Converter</h1>
      <div className="time-zones">
        <select value={fromZone.id} onChange={handleFromZoneChange}>
          {TIMEZONES.map((zone) => (
            <option key={zone.id} value={zone.id}>{zone.name}</option>
          ))}
        </select>
        <Slider fromZone={fromZone} toZone={toZone} currentTime={currentTime} />
        <select value={toZone.id} onChange={handleToZoneChange}>
          {TIMEZONES.map((zone) => (
            <option key={zone.id} value={zone.id}>{zone.name}</option>
          ))}
        </select>
      </div>
      <Datepicker selectedDate={selectedDate} onDateChange={handleDateChange} />
      <div className="converted-time">
        <Timezone time={convertedTime.format('h:mm a')} zone={toZone} date={selectedDate} />
      </div>
    </div>
  );
}

export default TimeZoneConverter;

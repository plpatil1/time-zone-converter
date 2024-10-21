import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';  // Import date picker styles

function Datepicker({ selectedDate, onDateChange }) {
  return (
    <DatePicker
      selected={selectedDate.toDate()}
      onChange={onDateChange}
      dateFormat="yyyy-MM-dd"
    />
  );
}

export default Datepicker;

import React from 'react';
import moment from 'moment-timezone';

function Timezone({ time, zone, date }) {
  return (
    <div className="timezone">
      <p>{time} ({zone.name})</p>
      <p>{date.format('YYYY-MM-DD')}</p>
    </div>
  );
}

export default Timezone;

import React, { useRef, useEffect } from 'react';

function Slider({ fromZone, toZone, currentTime }) {
  const sliderRef = useRef(null);

  const handleSliderChange = (e) => {
    const sliderValue = e.target.value;
    const hours = Math.floor(sliderValue / 60);
    const minutes = sliderValue % 60;
    const convertedTime = currentTime.clone().add(hours, 'hours').add(minutes, 'minutes').tz(toZone.id);
    console.log('Converted Time:', convertedTime.format('h:mm a'));
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.value = 0;  // Initialize slider value
  }, [fromZone, toZone, currentTime]);

  return (
    <div className="slider-container">
      <input type="range" min="-12*60" max="12*60" step="1" ref={sliderRef} onChange={handleSliderChange} />
    </div>
  );
}

export default Slider;

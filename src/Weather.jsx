import React from 'react';

function Weather({ data }) {
  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Weather: {data.weather[0].description}</p>
    </div>
  );
}

export default Weather;
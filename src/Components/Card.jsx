import React from "react";

let date = String(new window.Date());
date = date.slice(3, 15);

function Card({ weatherData }) {
  return (
    <div id="cardData">
      <p>{date}</p>
      <p>{weatherData.name}</p>
      <p>{weatherData.main.temp} °c</p>
      <p>{weatherData.weather[0].main}</p>
    </div>
  );
}

function CardEmpty() {
  return (
    <div id="cardData">
      <p>Search weather of any City</p>
    </div>
  );
}

export { Card, CardEmpty };

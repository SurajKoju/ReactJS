// import { response } from "express";
import React, { useEffect, useState } from "react";

const API_URL = "https://api.openweathermap.org/data/2.5/weather/";
const API_KEY = "c84a2dc40763b0b82d09b2cf78bb7dbb";
const UNIT = "metric";

const Weather = () => {
  const [city, setCity] = useState("");

  const handleChangeCity = (value) => {
    setCity(value);
  };
  const fetchWeather = () => {
    fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=${UNIT}`)
      .then((response) => response.json())
      .then((data) => console.log("This is data from API:", data))
      .catch((error) => console.log("Error in API", error));
  };

  useEffect(() => {
    fetchWeather();
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <input
            value={city}
            type="text"
            className="form-control"
            placeholder="Enter City Name"
            onChange={(e) => handleChangeCity(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={fetchWeather}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default Weather;

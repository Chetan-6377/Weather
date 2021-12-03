import React, { useEffect, useState } from "react";
import Card from "./Card"
import Forecast from "./Forecast"
export default function Weather() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      getForecast(lat, long)
      .then(data => {
        setForecast(data);
        // setError(null);
      })
      .catch(err => {
        // setError(err.message);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f0590081a00ab7af9d5a2db817ea04be`)
      .then(res => res.json())
      .then(result => {
        setWeatherData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  function getForecast(lat, long) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=f0590081a00ab7af9d5a2db817ea04be`
    )
      .then(res => res.json())
      .then(forecastData => {
        if (Object.entries(forecastData).length) {
          return forecastData.list
            .filter(forecast => forecast.dt_txt.match(/09:00:00/))
            .map(mapDataToWeatherInterface);
        }
      });
  }

  function mapDataToWeatherInterface(data) {
    const mapped = {
      date: data.dt * 1000, // convert from seconds to milliseconds
      description: data.weather[0].main,
      temperature: Math.round(data.main.temp),
    };
  
    // Add extra properties for the five day forecast: dt_txt, icon, min, max
    if (data.dt_txt) {
      mapped.dt_txt = data.dt_txt;
    }
  
    return mapped;
  }
  
  
  return (
    <div className="App">
      {(typeof weatherData.main != 'undefined') ? (
        <div className="">

        <Card weatherData={weatherData}/>
        <h1>Next Five days forecast :</h1>
        <Forecast forecast={forecast} weatherData={weatherData}/>
        </div>
      ): (
        <div></div>
      )}
      
    </div>
  );
}
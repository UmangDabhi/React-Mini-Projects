import React, { useState } from "react";
import search_icon from "../Assets/Weather-App-Asset/search.png";
import cloud_icon from "../Assets/Weather-App-Asset/cloud.png";
import humidity_icon from "../Assets/Weather-App-Asset/humidity.png";
import wind_icon from "../Assets/Weather-App-Asset/wind.png";
const WeatherApp = () => {
  const [wi, setWi] = useState(cloud_icon);
  const search = async () => {
    const searchitem = document.getElementById("CitySearch");
    if (searchitem.value === 0) {
      return 0;
    }
    console.log(searchitem.value);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchitem.value}&units=Metric&appid=7b7cb217476020dcda649a90cb624b02`;
    let response = null;
    try {
      response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Please Enter Valid City");
      return 0;
    }
    
    let data = await response.json();

    const temperature = document.getElementById("temperature");
    const city = document.getElementById("city");
    const wind = document.getElementById("wind");
    const humidity = document.getElementById("humidity");

    humidity.innerHTML = data.main.humidity + " %";
    wind.innerHTML = data.wind.speed + " km/h";
    temperature.innerHTML = data.main.temp + " \u00B0 C";
    city.innerHTML = data.name;
    console.log(data.weather[0].icon);
    let img_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    setWi(img_url);
  };
  return (
    <div className="w-screen h-screen flex bg-blue-500">
      <div className="w-screen mx-4 my-auto sm:w-2/4 h-3/5 sm:m-auto p-6 border rounded-2xl flex flex-col items-center bg-blue-900">
        <div className="flex w-40 md:w-80 justify-between bg-white rounded-lg">
          <input
            className="p-1 bg-transparent  pl-2 w-32 md:w-72"
            type="text"
            name="CitySearch"
            id="CitySearch"
            placeholder="Search"
          />
          <div>
            <img
              className="mt-1 mr-2"
              src={search_icon}
              alt="Search Icon"
              onClick={() => search()}
            />
          </div>
        </div>
        <div className=" sm:w-32 sm:h-32 w-16 h-16">
          <img className="sm:w-32 sm:h-32 w-16 h-16" src={wi} alt="weather-icon" />
        </div>
        <div className="text-white text-4xl text-center">
          <div id="temperature">24 C</div>
          <div id="city">London</div>
        </div>
        <div className="flex justify-between w-56 mt-7 text-center items-center text-white">
          <div className="flex flex-col items-center">
            <img className="w-12" src={humidity_icon} alt="" />
            <div>
              <div id="humidity">64%</div>
              <div>Humidity</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-12" src={wind_icon} alt="" />
            <div>
              <div id="wind">18 km/h</div>
              <div>Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

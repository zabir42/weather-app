import React from "react";
import cloudSvg from "../../assets/icons/cloud.svg";
import humiditySvg from "../../assets/icons/humidity.svg";
import tempMaxSvg from "../../assets/icons/temp-max.svg";
import tempMinSvg from "../../assets/icons/temp-min.svg";
import windSvg from "../../assets/icons/wind.svg";
import { useWeatherContext } from "../../context";

function WeatherCondition() {
  const { weatherData } = useWeatherContext();
  const { maxTemperature, minTemperature, humidity, cloudPercentage, wind } =
    weatherData;

  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        thunderstorm with light drizzle
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{maxTemperature}°</p>
            <img src={tempMaxSvg} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{minTemperature}°</p>
            <img src={tempMinSvg} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humidity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={humiditySvg} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercentage}%</p>
            <img src={cloudSvg} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={windSvg} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WeatherCondition;

import React from "react";
import locationIcon from "../../assets/pin.svg";

import { useWeatherContext } from "../../context";
import { getFormatDate } from "../../utils/date-utils";
import { getWeatherIcon } from "../../utils/weather-utils-icon";

function WeatherShow() {
  const { weatherData } = useWeatherContext();
  const { temperature, location, time, climate } = weatherData;


  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={locationIcon} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormatDate(time, "time", false)} -{" "}
        {getFormatDate(time, "date", false)}
      </p>
    </div>
  );
}

export default WeatherShow;

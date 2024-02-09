import React from "react";
import WeatherLayout from "../../layout/WeatherLayout";
import AddToFavorite from "./AddToFavorite";
import WeatherCondition from "./WeatherCondition";
import WeatherShow from "./WeatherShow";

function WeatherBoard() {
  return (
    <WeatherLayout>
      <AddToFavorite />
      <WeatherShow />
      <WeatherCondition />
    </WeatherLayout>
  );
}

export default WeatherBoard;

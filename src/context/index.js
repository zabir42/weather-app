import { useContext } from "react";
import { FavoriteContext, LocationContext, WeatherContext } from "./context";

const useWeatherContext = () => useContext(WeatherContext);
const useFavoriteContext = () => useContext(FavoriteContext);
const useLocationContext = () => useContext(LocationContext);

export { useFavoriteContext, useLocationContext, useWeatherContext };


import hazeIcon from "../assets/haze.svg";
import cloudIcon from "../assets/icons/cloud.svg";
import snowIcon from "../assets/icons/snow.svg";
import sunnyIcon from "../assets/icons/sunny.svg";
import rainIcon from "../assets/rainy.svg";
import thunderIcon from "../assets/thunder.svg";

const getWeatherIcon = (climate) => {
  switch (climate) {
    case "Rain":
      return rainIcon;
    case "Clouds":
      return cloudIcon;
    case "Clear":
      return rainIcon;
    case "Snow":
      return snowIcon;
    case "Fog":
      return hazeIcon;
    case "Thunder":
      return thunderIcon;

    default:
      return sunnyIcon;
  }
};

export { getWeatherIcon };


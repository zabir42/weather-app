import { useWeatherContext } from "../context";

import { useEffect, useState } from "react";
import ClearSkyImage from "../assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "../assets/backgrounds/few-clouds.jpg";
import MistImage from "../assets/backgrounds/mist.jpeg";
import RainyDayImage from "../assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "../assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "../assets/backgrounds/sunny.jpg";
import ThunderStormImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";

function getBackgroundImage(climate) {
  switch (climate) {
    case "Rain":
      return RainyDayImage;
    case "Clouds":
      return ScatterdCloudsImage;
    case "Clear":
      return ClearSkyImage;
    case "Snow":
      return SnowImage;
    case "Thunder":
      return ThunderStormImage;
    case "Fog":
      return WinterImage;
    case "Haze":
      return FewCloudsImage;
    case "Mist":
      return MistImage;
    default:
      return ClearSkyImage;
  }
}

export default function Layout({ children }) {
  const { weatherData } = useWeatherContext();
  const [climateImage, setClimateImage] = useState("");
  const { climate } = weatherData;

  useEffect(() => {
    const bgImage = getBackgroundImage(climate);
    setClimateImage(bgImage);
  }, [climate]);

  return (
    <div
      style={{ backgroundImage: `url('${climateImage}')` }}
      className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center"
    >
      {children}
    </div>
  );
}

import Page from "./Page";
import { FavoriteProvider, WeatherProvider } from "./provider";
import LocationProvider from "./provider/LocationProvider";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

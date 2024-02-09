import Header from "./components/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { useWeather } from "./hooks";
import Layout from "./layout/Layout";

function Page() {
  const { loading } = useWeather();
  return (
    <Layout>
      <Header />
      {loading.state ? <p>{loading.message}</p> : <WeatherBoard />}
    </Layout>
  );
}

export default Page;

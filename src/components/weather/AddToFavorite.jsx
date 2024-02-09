import { useEffect, useState } from "react";
import redHeartSvg from "../../assets/heart-red.svg";
import heartSvg from "../../assets/heart.svg";
import { useFavoriteContext, useWeatherContext } from "../../context";

function AddToFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { weatherData } = useWeatherContext();
  const { favourites, addToFavourites, removeFromFavourites } =
    useFavoriteContext();
  const { longitude, latitude, location } = weatherData;

  const handleFavorite = () => {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(longitude, latitude, location);
    } else {
      removeFromFavourites(location);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavorite(found);
  }, [favourites, location]);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span onClick={handleFavorite}>Add to Favourite</span>
          <img src={isFavorite ? redHeartSvg : heartSvg} alt="heart" />
        </button>
      </div>
    </div>
  );
}

export default AddToFavorite;

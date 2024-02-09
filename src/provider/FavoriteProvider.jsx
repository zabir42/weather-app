import { FavoriteContext } from "../context/context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude,
        longitude,
        location,
      },
    ]);
  };
  const removeFromFavourites = (location) => {
    const filterFav = favourites.filter((fav) => fav.location !== location);
    setFavourites(filterFav);
  };

  return (
    <FavoriteContext.Provider
      value={{ addToFavourites, removeFromFavourites, favourites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;

import React from "react";
import { FavoriteContext } from "../context/context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  // Check if favorites is an array
  if (!Array.isArray(favorites)) {
    console.error("Favorites is not an array:", favorites);
    // Handle the issue, e.g., set favorites to an empty array
    setFavorites([]);
  }

  const addToFavorite = (longitute, latitude, location) => {
    const newFavorite = {
      longitute,
      latitude,
      location,
    };

    const updatedFavorites = [...favorites, newFavorite];

    console.log("New Favorite:", updatedFavorites);

    setFavorites(updatedFavorites);
  };

  const removeToFavorite = (location) => {
    const filteredFavorite = favorites.filter(
      (fav) => fav.location !== location
    );
    setFavorites(filteredFavorite);
  };

  return (
    <FavoriteContext.Provider
      value={{ addToFavorite, removeToFavorite, favorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;

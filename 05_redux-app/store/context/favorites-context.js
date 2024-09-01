import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoritesMealIds, setFavoriteMealIds] =
    useState([]);
  function addFavorite(id) {
    setFavoriteMealIds((prev) => [...prev, id]);
  }
  function removeFavorite(id) {
    setFavoriteMealIds((prev) =>
      prev.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoritesMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;

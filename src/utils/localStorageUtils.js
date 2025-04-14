export const saveFavouritesToLocalStorage = (userId, favouritesList) => {
  if (!userId) return;
  localStorage.setItem(`favourites_${userId}`, JSON.stringify(favouritesList));
};

export const getFavouritesFromLocalStorage = (userId) => {
  const data = localStorage.getItem(`favourites_${userId}`);
  return data ? JSON.parse(data) : [];
};

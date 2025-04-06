// Зберігаємо вподобані елементи в localStorage для конкретного користувача
export const saveFavouritesToLocalStorage = (userId, favouritesList) => {
    if (!userId) return;
    localStorage.setItem(`favourites_${userId}`, JSON.stringify(favouritesList));
  };
  
  // Отримуємо вподобані елементи з localStorage
  export const getFavouritesFromLocalStorage = (userId) => {
    const data = localStorage.getItem(`favourites_${userId}`);
    return data ? JSON.parse(data) : [];
  };
  

// Функція для фільтрації психологів за різними критеріями
export const filterPsychologists = (psychologists, filter) => {
    return (psychologists || [])
      .filter((psychologist) => {
        switch (filter) {
          case "Less than 150$":
            return psychologist.price_per_hour < 150;
          case "Greater than 160$":
            return psychologist.price_per_hour >= 160;
          case "Popular":
            return psychologist.rating >= 4.8;
          case "Not popular":
            return psychologist.rating < 4.7;
          case "Show all":
            return true; // Показуємо всіх
          default:
            return true; // Якщо не знайдений відповідний фільтр, то всі.
        }
      })
      .sort((a, b) => {
        if (filter === "A to Z") {
          return a.name.localeCompare(b.name); // Сортуємо за алфавітом від A до Z
        } else if (filter === "Z to A") {
          return b.name.localeCompare(a.name); // Сортуємо за алфавітом від Z до A
        }
        return 0; // Без сортування, якщо не потрібно
      });
  };
  
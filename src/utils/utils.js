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
          return true;
        default:
          return true;
      }
    })
    .sort((a, b) => {
      if (filter === "A to Z") {
        return a.name.localeCompare(b.name);
      } else if (filter === "Z to A") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
};

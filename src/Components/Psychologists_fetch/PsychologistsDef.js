import { ref, get } from "firebase/database";
import { database } from "../../firebase";

export const fetchData = async () => {
  try {
    const dbRef = ref(database, "psychologists"); // Вкажи шлях у базі (наприклад, "users")
    const snapshot = await get(dbRef);
    console.log("fcefef", snapshot);

    if (snapshot.exists()) {
      console.log("Data:", snapshot.val()); // Отримані дані
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// Викликати fetchData() там, де потрібно

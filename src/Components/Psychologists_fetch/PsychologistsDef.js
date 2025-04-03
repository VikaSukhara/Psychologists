import { ref, get } from "firebase/database";
import { database } from "../../firebase";

export const fetchData = async () => {
  try {
    const dbRef = ref(database, "psychologists"); // Вкажи шлях у базі (наприклад, "users")
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
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

import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Layout from "./Components/Layout/Layout";
import PsychologistsPage from "./Pages/Psychologists";
import Favourite from "./Pages/Favourite";

import { Bounce, ToastContainer } from "react-toastify";
import styled from "styled-components";

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__progress-bar {
    background-color: rgb(49, 103, 228); /* Колір прогрес-бару */
  }

  .Toastify__toast {
    font-size: 16px; 
    padding: 10px 20px;
  }

  @media (max-width: 768px) {
    .Toastify__toast {
      font-size: 14px;
      padding: 8px 15px;
      width: 70%;
    }
  }
`;

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/specialists" element={<PsychologistsPage />} />
          <Route path="/favourite" element={<Favourite />} />
        </Route>
      </Routes>

      <StyledToastContainer
        progressStyle={{
          backgroundColor: "rgb(52, 112, 255);", // Змінюємо колір прогрес-бару
          borderRadius: "50px",
        }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;

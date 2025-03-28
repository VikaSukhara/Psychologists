import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Layout from "./Components/Layout/Layout";
import PsychologistsPage from "./Pages/Psychologists";
import Favourite from "./Pages/Favourite";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />}/>
           <Route path="/favourite" element={<Favourite />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

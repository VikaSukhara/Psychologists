import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          {/* <Route path="/about" element={<Psychologists />} />
   <Route path="/products" element={<Favourite />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

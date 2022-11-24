import "./App.css";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HomePage />

      <Routes>
        <Route path={"/posts/:id"} element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

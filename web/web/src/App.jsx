import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArenaPage from "./pages/Arena/ArenaPage";
import PoolGamePage from "./pages/Arena/PoolGamePage";
import CheckersGamePage from "./pages/Arena/CheckersGamePage";
import CardsGamePage from "./pages/Arena/CardsGamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/arena" element={<ArenaPage />} />
        <Route path="/arena/pool" element={<PoolGamePage />} />
        <Route path="/arena/checkers" element={<CheckersGamePage />} />
        <Route path="/arena/cards" element={<CardsGamePage />} />
      </Routes>
    </Router>
  );
}

export default App;

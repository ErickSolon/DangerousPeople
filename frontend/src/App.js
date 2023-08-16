import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pessoas } from "./pages/Pessoas";
import Inicio from "./pages/Home";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/pessoas" element={<Pessoas />} />
          </Routes>
          <FooterComponent />
        </Router>
      </header>
    </div>
  );
}

export default App;

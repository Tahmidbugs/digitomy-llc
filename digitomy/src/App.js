import "./App.css";
import Contact from "./components/Contact";
import Demo from "./components/Demo";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import Patents from "./components/Patents";
import Team from "./components/Team";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div className="body">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Head />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

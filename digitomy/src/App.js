import "./App.css";
import Contact from "./components/Contact";
import React from "react";

import Demo from "./components/Demo";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import Patents from "./components/Patents";
import Team from "./components/Team";
import Lottie from "react-lottie";
import ChatBot from "./components/Chatbot";
import animationDatas from "./lotties/mosquito.json";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sponsors from "./components/Sponsors";
function App() {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  return (
    <div className="body">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Head />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </Router>
      {animationDatas && (
        <div
          style={{ width: "10%", position: "absolute", bottom: 50, right: 20 }}
          onClick={() => setIsChatOpen(true)}
        >
          <Lottie
            options={{ animationData: animationDatas }}
            eventListeners={[{}]}
          />
        </div>
      )}
      {isChatOpen && (
        <ChatBot setIsChatOpen={setIsChatOpen} isChatOpen={isChatOpen} />
      )}
    </div>
  );
}

export default App;

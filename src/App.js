import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Jobs from "./components/Jobs";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Events />
        <News />

        <Jobs />
      </div>
      <Footer />
    </div>
  );
};

export default App;

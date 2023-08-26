import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles.css";
import Cap from "./assets/cap.svg";
import ColumnSection from "./ColumnSection";
import Cards from "./Cards";
function App() {
  return (
    <>
      <div className="main-container">
        <ColumnSection />
        <Cards />
      </div>
    </>
  );
}

export default App;

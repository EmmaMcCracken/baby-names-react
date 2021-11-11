import React from "react";
import "./App.css";
import "./babyNamesData";
import allBabyNames from "./babyNamesData.json";
import BabyNamesList from "./components/BabyNamesList";

function App() {
  return (
    <div className="App">
      <BabyNamesList names={allBabyNames} />
    </div>
  );
}

export default App;

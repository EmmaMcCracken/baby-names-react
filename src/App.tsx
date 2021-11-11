import React, { useState } from "react";
import "./App.css";
import "./babyNamesData";
import allBabyNames from "./babyNamesData.json";
import { babyName } from "./components/BabyName";
import BabyNamesList from "./components/BabyNamesList";
import { FavouritesList } from "./components/FavouritesList";

function App() {
  const [favouriteIDs, setFavouriteIDs] = useState<number[]>([]);

  function handleAddToFavourites(babyName: babyName) {
    console.log("handleAddToFavourites has been called");
    if (favouriteIDs.includes(babyName.id)) {
      return;
    }
    setFavouriteIDs([...favouriteIDs, babyName.id]);
  }
  return (
    <div className="App">
      <FavouritesList
        allBabyNames={allBabyNames}
        favouriteIDs={favouriteIDs}
        onClick={() => {}}
      />
      <BabyNamesList names={allBabyNames} onClick={handleAddToFavourites} />
    </div>
  );
}

export default App;

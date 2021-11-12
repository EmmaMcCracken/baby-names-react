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
    if (favouriteIDs.includes(babyName.id)) {
      return;
    }
    setFavouriteIDs([...favouriteIDs, babyName.id]);
  }
  function handleRemoveFromFavourites(babyName: babyName) {
    const newFavouriteIDs = favouriteIDs;
    newFavouriteIDs.splice(newFavouriteIDs.indexOf(babyName.id), 1);
    setFavouriteIDs(newFavouriteIDs);
  }
  return (
    <div className="App">
      <FavouritesList
        allBabyNames={allBabyNames}
        favouriteIDs={favouriteIDs}
        onClick={handleRemoveFromFavourites}
      />
      <BabyNamesList names={allBabyNames} onClick={handleAddToFavourites} />
    </div>
  );
}

export default App;

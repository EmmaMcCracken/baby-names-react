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
  function handleRemoveFromFavourites(babyName: babyName) {
    console.log(
      "handleRemove... has been called and favouriteIDs are",
      favouriteIDs
    );
    let newFavouriteIDs = favouriteIDs;
    newFavouriteIDs.splice(newFavouriteIDs.indexOf(babyName.id), 1);
    setFavouriteIDs(newFavouriteIDs);
    console.log("after the splice, newFavouriteIDs are", newFavouriteIDs);
    console.log(
      "favouriteIDs should hopefully be the same as above, favouriteIDs are",
      favouriteIDs
    );
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

import BabyName, { babyName } from "./BabyName";

interface FavouritesListProps {
  favouriteIDs: number[];
  allBabyNames: babyName[];
  onClick: (babyName: babyName) => void;
}

export function FavouritesList(props: FavouritesListProps) {
  const favouriteNames = props.allBabyNames.filter((x) =>
    props.favouriteIDs.includes(x.id)
  );
  console.log("favourite names are ", favouriteNames);
  return (
    <div className="babyNamesList">
      {favouriteNames.map((baby: babyName) => (
        <BabyName key={baby.id} babyName={baby} onClick={props.onClick} />
      ))}
    </div>
  );
}

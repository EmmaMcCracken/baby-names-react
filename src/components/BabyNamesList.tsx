import BabyName, { babyName } from "./BabyName";

export interface BabyNamesListProps {
  names: babyName[];
}

export default function BabyNamesList(props: BabyNamesListProps) {
  return (
    <div className="babyNamesList">
      {props.names.map((baby: babyName) => (
        <BabyName key={baby.id} babyName={baby} />
      ))}
    </div>
  );
}

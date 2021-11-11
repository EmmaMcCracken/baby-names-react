import BabyName, { babyName } from "./BabyName";

export interface BabyNamesListProps {
  names: babyName[];
  onClick: (babyName: babyName) => void;
}

export default function BabyNamesList(props: BabyNamesListProps) {
  return (
    <div className="babyNamesList">
      {props.names.map((baby: babyName) => (
        <BabyName key={baby.id} babyName={baby} onClick={props.onClick} />
      ))}
    </div>
  );
}

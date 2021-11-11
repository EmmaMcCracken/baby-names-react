export interface babyName {
  name: string;
  id: number;
  sex: string;
}

export interface babyNameProps {
  babyName: babyName;
  onClick: (babyName: babyName) => void;
}

export default function BabyName(props: babyNameProps) {
  return (
    <button
      className={"button" + props.babyName.sex.toUpperCase()}
      onClick={() => props.onClick(props.babyName)}
    >
      {props.babyName.name}
    </button>
  );
}

export interface babyName {
  name: string;
  id: number;
  sex: string;
}

export interface babyNameProps {
  babyName: babyName;
}

export default function BabyName(props: babyNameProps) {
  return (
    <button className={"button" + props.babyName.sex.toUpperCase()}>
      {props.babyName.name}
    </button>
  );
}

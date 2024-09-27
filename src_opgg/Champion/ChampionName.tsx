import { CSSProperties } from "react";

export type championNameProps = {
  name: string;
};

const ChampionName = (props: championNameProps) => {
  const championNameStyle: CSSProperties = {
    maxWidth: "130px",
    height: "16px",
    fontWeight: "bold",
    color: "black",
    flex: "1",
  };
  return <span style={championNameStyle}>{props.name}</span>;
};

export default ChampionName;

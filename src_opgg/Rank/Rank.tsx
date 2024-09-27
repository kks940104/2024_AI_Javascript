import { CSSProperties } from "react";

export type rankProps = {
  rank: number;
};

const Rank = (props: rankProps) => {
  const cssStyle: CSSProperties = {
    fontSize: "12px",
    color: "#9aa4af",
    flex: "1",
  };
  return <span style={cssStyle}>{props.rank}</span>;
};

export default Rank;

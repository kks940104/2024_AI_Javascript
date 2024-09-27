import { CSSProperties } from "react";

export type elevationProps = {
  elerank: number;
};

const Elevation = (props: elevationProps) => {
  const elevationStyle: CSSProperties = {
    color: "#139020",
    fontSize: "12px",
    marginLeft: "10px",
    flex: "1",
  };
  return <span style={elevationStyle}>{props.elerank}</span>;
};

export default Elevation;
